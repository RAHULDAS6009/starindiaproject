import prisma from '../config/database';
import { UserRole } from '@prisma/client';

class UserModel {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profilePic: true,
        status: true,
        verified: true,
        bio: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async updateProfile(userId: string, data: {
    name?: string;
    bio?: string;
    profilePic?: string;
    status?: string;
  }) {
    return prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profilePic: true,
        status: true,
        verified: true,
        bio: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async follow(followerId: string, followingId: string) {
    if (followerId === followingId) {
      throw new Error('Cannot follow yourself');
    }

    return prisma.follow.create({
      data: {
        followerId,
        followingId,
      },
    });
  }

  async unfollow(followerId: string, followingId: string) {
    return prisma.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });
  }

  async getFollowers(userId: string) {
    return prisma.follow.findMany({
      where: { followingId: userId },
      include: {
        follower: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            verified: true,
          },
        },
      },
    });
  }

  async getFollowing(userId: string) {
    return prisma.follow.findMany({
      where: { followerId: userId },
      include: {
        following: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            verified: true,
          },
        },
      },
    });
  }

  async list(filters: {
    role?: UserRole;
    search?: string;
    limit?: number;
    cursor?: string;
  }) {
    const where: any = {};

    if (filters.role) {
      where.role = filters.role;
    }

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const limit = filters.limit || 50;

    const users = await prisma.user.findMany({
      where,
      take: limit + 1,
      ...(filters.cursor && {
        cursor: { id: filters.cursor },
        skip: 1,
      }),
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profilePic: true,
        verified: true,
        createdAt: true,
      },
    });

    const hasMore = users.length > limit;
    const data = hasMore ? users.slice(0, limit) : users;
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

export default new UserModel();

