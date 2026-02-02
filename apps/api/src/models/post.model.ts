import prisma from '../config/database';
import { PostType } from '@prisma/client';

class PostModel {
  async getFeed(filters: {
    userId?: string;
    limit?: number;
    cursor?: string;
  }) {
    const limit = filters.limit || 20;

    const posts = await prisma.post.findMany({
      where: {
        type: PostType.POST,
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
        comments: {
          take: 5,
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                profilePic: true,
              },
            },
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

  async addComment(userId: string, postId: string, text: string) {
    return prisma.comment.create({
      data: {
        userId,
        postId,
        text,
      },
      include: {
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

export default new PostModel();

