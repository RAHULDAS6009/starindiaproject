import { Router } from 'express';
import adminController from '../controllers/admin.controller';
import { authenticate } from '../middlewares/auth';
import { requireAdmin } from '../middlewares/rbac';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(requireAdmin);

const approveContentSchema = z.object({
  body: z.object({
    targetType: z.enum(['post', 'reel', 'comment']),
    targetId: z.string(),
    approved: z.boolean(),
  }),
});

const approvePaymentSchema = z.object({
  body: z.object({
    paymentId: z.string(),
    approved: z.boolean(),
  }),
});

router.get('/dashboard', adminController.getDashboard.bind(adminController));
router.get('/users', adminController.getUsers.bind(adminController));
router.post(
  '/content/approve',
  validate(approveContentSchema),
  adminController.approveContent.bind(adminController)
);
router.post(
  '/payments/approve',
  validate(approvePaymentSchema),
  adminController.approvePayment.bind(adminController)
);
router.get('/audit', adminController.getAuditLogs.bind(adminController));

export default router;

