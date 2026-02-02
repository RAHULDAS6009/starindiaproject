import { Router } from 'express';
import castingController from '../controllers/casting.controller';
import { authenticate, optionalAuth } from '../middlewares/auth';
import { requireProductionOrCasting, requireArtist } from '../middlewares/rbac';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

const applySchema = z.object({
  body: z.object({
    castingId: z.string(),
    message: z.string().max(500).optional(),
  }),
});

router.get('/list', optionalAuth, castingController.list.bind(castingController));

router.use(authenticate);

router.post(
  '/apply',
  requireArtist,
  validate(applySchema),
  castingController.apply.bind(castingController)
);

export default router;

