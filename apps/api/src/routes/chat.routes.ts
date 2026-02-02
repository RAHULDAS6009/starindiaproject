import { Router } from 'express';
import chatController from '../controllers/chat.controller';
import { authenticate } from '../middlewares/auth';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

router.use(authenticate);

const sendMessageSchema = z.object({
  body: z.object({
    recipientId: z.string(),
    message: z.string().min(1).max(1000),
  }),
});

router.get('/history/:userId', chatController.getHistory.bind(chatController));
router.post(
  '/send',
  validate(sendMessageSchema),
  chatController.send.bind(chatController)
);

export default router;

