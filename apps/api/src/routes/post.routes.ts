import { Router } from 'express';
import postController from '../controllers/post.controller';
import { authenticate, optionalAuth } from '../middlewares/auth';
import { interactionRateLimit } from '../middlewares/rateLimit';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

const commentSchema = z.object({
  body: z.object({
    postId: z.string(),
    text: z.string().min(1).max(500),
  }),
});

router.get('/feed', optionalAuth, postController.getFeed.bind(postController));

router.use(authenticate);

router.post(
  '/comment',
  interactionRateLimit,
  validate(commentSchema),
  postController.comment.bind(postController)
);

export default router;

