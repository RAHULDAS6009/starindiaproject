import { Router } from 'express';
import userController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100).optional(),
    bio: z.string().max(500).optional(),
    profilePic: z.string().url().optional(),
    status: z.string().optional(),
  }),
});

// All user routes require authentication
router.use(authenticate);

router.get('/profile/:id', userController.getProfile.bind(userController));
router.get('/profile', userController.getProfile.bind(userController));

router.put(
  '/profile/update',
  validate(updateProfileSchema),
  userController.updateProfile.bind(userController)
);

router.post('/follow/:userId', userController.follow.bind(userController));
router.post('/unfollow/:userId', userController.unfollow.bind(userController));

export default router;

