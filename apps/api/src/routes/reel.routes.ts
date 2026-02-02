import { Router } from 'express';
import reelController from '../controllers/reel.controller';
import { authenticate, optionalAuth } from '../middlewares/auth';
import { interactionRateLimit, uploadRateLimit } from '../middlewares/rateLimit';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

const uploadReelSchema = z.object({
  body: z.object({
    mediaUrl: z.string().url(),
    caption: z.string().max(500).optional(),
  }),
});

const likeSchema = z.object({
  body: z.object({
    targetId: z.string(),
    targetType: z.enum(['post', 'comment']),
  }),
});

router.get('/feed', optionalAuth, reelController.getFeed.bind(reelController));

router.use(authenticate);

router.post(
  '/upload',
  uploadRateLimit,
  validate(uploadReelSchema),
  reelController.upload.bind(reelController)
);

router.post(
  '/like',
  interactionRateLimit,
  validate(likeSchema),
  reelController.like.bind(reelController)
);

export default router;

