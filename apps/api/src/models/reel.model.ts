import prisma from '../config/database';
import { PostType } from '@prisma/client';

class ReelModel {
  async getFeed(filters: {
    userId?: string;
    limit?: number;
    cursor?: string;
  }) {
    const limit = filters.limit || 20;

    const posts = await prisma.post.findMany({
      where: {
        type: PostType.REEL,
      },
      take: limit + 1,
      ...(filters.cursor && {
        cursor: { id: filters.cursor },
        skip: 1,
      }),
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true,
            verified: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    const hasMore = posts.length > limit;
    const data = hasMore ? posts.slice(0, limit) : posts;
    const nextCursor = hasMore ? data[data.length - 1].id : undefined;

    return {
      data,
      pagination: {
        cursor: nextCursor,
        hasMore,
      },
    };
  }

  async create(userId: string, data: { mediaUrl: string; caption?: string }) {
    return prisma.post.create({
      data: {
        userId,
        type: PostType.REEL,
        mediaUrl: data.mediaUrl,
        caption: data.caption,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true,
            verified: true,
          },
        },
      },
    });
  }

  async toggleLike(userId: string, targetId: string, targetType: string) {
    const existing = await prisma.like.findUnique({
      where: {
        userId_targetId_targetType: {
          userId,
          targetId,
          targetType,
        },
      },
    });

    if (existing) {
      await prisma.like.delete({
        where: {
          id: existing.id,
        },
      });

      // Decrement likes count
      if (targetType === 'post') {
        await prisma.post.update({
          where: { id: targetId },
          data: { likesCount: { decrement: 1 } },
        });
      }

      return { liked: false };
    } else {
      await prisma.like.create({
        data: {
          userId,
          targetId,
          targetType,
        },
      });

      // Increment likes count
      if (targetType === 'post') {
        await prisma.post.update({
          where: { id: targetId },
          data: { likesCount: { increment: 1 } },
        });
      }

      return { liked: true };
    }
  }
}

export default new ReelModel();

