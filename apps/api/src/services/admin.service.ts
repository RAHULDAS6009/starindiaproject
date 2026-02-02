import prisma from '../config/database';
import auditService from './audit.service';
import userModel from '../models/user.model';
import { AuditAction } from '@prisma/client';

class AdminService {
  async getDashboard() {
    const [
      totalUsers,
      totalPosts,
      totalCastings,
      pendingPayments,
      recentUsers,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
      prisma.casting.count(),
      prisma.payment.count({ where: { status: 'PENDING' } }),
      prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      kpis: {
        totalUsers,
        totalPosts,
        totalCastings,
        pendingPayments,
      },
      recentUsers,
    };
  }

  async getUsers(filters: {
    role?: string;
    search?: string;
    limit?: number;
    cursor?: string;
  }) {
    return userModel.list({
      role: filters.role as any,
      search: filters.search,
      limit: filters.limit,
      cursor: filters.cursor,
    });
  }

  async approveContent(adminId: string, data: {
    targetType: string;
    targetId: string;
    approved: boolean;
  }) {
    // In a real implementation, you'd update the content status
    // For now, we'll just create an audit log
    await auditService.createLog({
      adminId,
      action: data.approved ? AuditAction.APPROVE : AuditAction.REJECT,
      targetType: data.targetType,
      targetId: data.targetId,
      status: 'success',
      meta: { approved: data.approved },
    });
  }

  async approvePayment(adminId: string, paymentId: string, approved: boolean) {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new Error('Payment not found');
    }

    const newStatus = approved ? 'APPROVED' : 'REJECTED';

    await prisma.payment.update({
      where: { id: paymentId },
      data: { status: newStatus as any },
    });

    await auditService.createLog({
      adminId,
      action: approved ? AuditAction.APPROVE : AuditAction.REJECT,
      targetType: 'payment',
      targetId: paymentId,
      status: 'success',
      meta: { approved, amount: payment.amount },
    });
  }

  async getAuditLogs(filters: {
    adminId?: string;
    targetType?: string;
    targetId?: string;
    from?: Date;
    to?: Date;
    limit?: number;
    cursor?: string;
  }) {
    return auditService.getLogs(filters);
  }
}

export default new AdminService();

