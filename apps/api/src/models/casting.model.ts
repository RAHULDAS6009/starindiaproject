import prisma from '../config/database';
import { CastingStatus, ApplicantStatus } from '@prisma/client';

class CastingModel {
  async list(filters: {
    status?: string;
    limit?: number;
    cursor?: string;
  }) {
    const where: any = {};

    if (filters.status) {
      where.status = filters.status as CastingStatus;
    }

    const limit = filters.limit || 20;

    const castings = await prisma.casting.findMany({
      where,
      take: limit + 1,
      ...(filters.cursor && {
        cursor: { id: filters.cursor },
        skip: 1,
      }),
      orderBy: { createdAt: 'desc' },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            profilePic: true,
          },
        },
        _count: {
          select: {
            applicants: true,
          },
        },
      },
    });

    const hasMore = castings.length > limit;
    const data = hasMore ? castings.slice(0, limit) : castings;
    const nextCursor = hasMore ? data[data.length - 1].id : undefined;

    return {
      data,
      pagination: {
        cursor: nextCursor,
        hasMore,
      },
    };
  }

  async apply(userId: string, castingId: string, message?: string) {
    // Check if already applied
    const existing = await prisma.castingApplicant.findUnique({
      where: {
        castingId_userId: {
          castingId,
          userId,
        },
      },
    });

    if (existing) {
      throw new Error('Already applied to this casting');
    }

    return prisma.castingApplicant.create({
      data: {
        castingId,
        userId,
        message,
        status: ApplicantStatus.APPLIED,
      },
      include: {
        casting: {
          select: {
            id: true,
            projectName: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true,
          },
        },
      },
    });
  }
}

export default new CastingModel();

