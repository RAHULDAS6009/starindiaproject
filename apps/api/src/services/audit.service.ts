import prisma from '../config/database';
import { AuditAction, UserRole } from '@prisma/client';
import { logger } from '../utils/logger';

interface CreateAuditLogParams {
  adminId: string;
  action: AuditAction;
  targetType?: string;
  targetId?: string;
  status: 'success' | 'failed';
  meta?: Record<string, any>;
}

class AuditService {
  async createLog(params: CreateAuditLogParams) {
    try {
      const auditLog = await prisma.auditLog.create({
        data: {
          adminId: params.adminId,
          action: params.action,
          targetType: params.targetType,
          targetId: params.targetId,
          status: params.status,
          meta: params.meta || {},
        },
      });

      logger.info('Audit log created', {
        auditLogId: auditLog.id,
        adminId: params.adminId,
        action: params.action,
      });

      return auditLog;
    } catch (error) {
      logger.error('Failed to create audit log', { error, params });
      throw error;
    }
  }

  async getLogs(filters: {
    adminId?: string;
    targetType?: string;
    targetId?: string;
    from?: Date;
    to?: Date;
    limit?: number;
    cursor?: string;
  }) {
    const where: any = {};

    if (filters.adminId) {
      where.adminId = filters.adminId;
    }

    if (filters.targetType) {
      where.targetType = filters.targetType;
    }

    if (filters.targetId) {
      where.targetId = filters.targetId;
    }

    if (filters.from || filters.to) {
      where.timestamp = {};
      if (filters.from) {
        where.timestamp.gte = filters.from;
      }
      if (filters.to) {
        where.timestamp.lte = filters.to;
      }
    }

    const limit = filters.limit || 50;

    const logs = await prisma.auditLog.findMany({
      where,
      take: limit + 1,
      ...(filters.cursor && {
        cursor: { id: filters.cursor },
        skip: 1,
      }),
      orderBy: { timestamp: 'desc' },
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    const hasMore = logs.length > limit;
    const data = hasMore ? logs.slice(0, limit) : logs;
    const nextCursor = hasMore ? data[data.length - 1].id : undefined;

    return {
      data,
      pagination: {
        cursor: nextCursor,
        hasMore,
      },
    };
  }
}

export default new AuditService();

