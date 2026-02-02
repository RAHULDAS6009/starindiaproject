import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { sendError } from '../utils/response';
import { UserRole } from '@prisma/client';

type AllowedRoles = UserRole | UserRole[];

export const requireRole = (...allowedRoles: AllowedRoles[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.userId || !req.userRole) {
      sendError(res, 401, 'Authentication required');
      return;
    }

    const roles = allowedRoles.flat();
    const hasRole = roles.includes(req.userRole as UserRole);

    if (!hasRole) {
      sendError(res, 403, 'Insufficient permissions');
      return;
    }

    next();
  };
};

export const requireAdmin = requireRole(UserRole.ADMIN, UserRole.SUPER_ADMIN);

export const requireProductionOrCasting = requireRole(
  UserRole.PRODUCTION,
  UserRole.CASTING,
  UserRole.ADMIN,
  UserRole.SUPER_ADMIN
);

export const requireArtist = requireRole(
  UserRole.ARTIST,
  UserRole.PRODUCTION,
  UserRole.CASTING,
  UserRole.ADMIN,
  UserRole.SUPER_ADMIN
);

