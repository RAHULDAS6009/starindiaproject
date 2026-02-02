import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../config/env';
import prisma from '../config/database';
import { UserRole } from '@prisma/client';
import { logger } from '../utils/logger';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

class AuthService {
  async register(data: RegisterData) {
    const { name, email, password, role = UserRole.GENERAL_USER } = data;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
      },
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

    logger.info('User registered', { userId: user.id, email: user.email });

    return user;
  }

  async login(data: LoginData): Promise<{ user: any; tokens: AuthTokens }> {
    const { email, password } = data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const tokens = this.generateTokens(user.id, user.role);

    logger.info('User logged in', { userId: user.id, email: user.email });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic,
        verified: user.verified,
      },
      tokens,
    };
  }

  generateTokens(userId: string, role: UserRole): AuthTokens {
    const accessToken = jwt.sign(
      { userId, role },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
      { userId, role },
      env.JWT_REFRESH_SECRET,
      { expiresIn: env.JWT_REFRESH_EXPIRES_IN }
    );

    return { accessToken, refreshToken };
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as {
        userId: string;
        role: UserRole;
      };

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true, role: true },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return this.generateTokens(user.id, user.role);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }
}

export default new AuthService();

