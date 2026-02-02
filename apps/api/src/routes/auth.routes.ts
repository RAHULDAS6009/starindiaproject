import { Router } from 'express';
import authController from '../controllers/auth.controller';
import { validate } from '../middlewares/validation';
import { authRateLimit } from '../middlewares/rateLimit';
import { z } from 'zod';

const router = Router();

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(['GENERAL_USER', 'ARTIST', 'PRODUCTION', 'CASTING']).optional(),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1),
  }),
});

const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1),
  }),
});

router.post(
  '/register',
  authRateLimit,
  validate(registerSchema),
  authController.register.bind(authController)
);

router.post(
  '/login',
  authRateLimit,
  validate(loginSchema),
  authController.login.bind(authController)
);

router.post(
  '/refresh',
  validate(refreshTokenSchema),
  authController.refreshToken.bind(authController)
);

export default router;

