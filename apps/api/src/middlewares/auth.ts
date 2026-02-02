import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../config/env';
import { sendError } from '../utils/response';
import prisma from '../config/database';

export interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      sendError(res, 401, 'No token provided');
      return;
    }

    const token = authHeader.substring(7);

    try {
      const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: string; role: string };
      
      // Verify user still exists
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true, role: true, email: true },
      });

      if (!user) {
        sendError(res, 401, 'User not found');
        return;
      }

      req.userId = user.id;
      req.userRole = user.role;
      next();
    } catch (error) {
      sendError(res, 401, 'Invalid or expired token');
    }
  } catch (error) {
    sendError(res, 500, 'Authentication error');
  }
};

export const optionalAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: string; role: string };
        const user = await prisma.user.findUnique({
          where: { id: decoded.userId },
          select: { id: true, role: true },
        });

        if (user) {
          req.userId = user.id;
          req.userRole = user.role;
        }
      } catch (error) {
        // Ignore token errors for optional auth
      }
    }
    next();
  } catch (error) {
    next();
  }
};

