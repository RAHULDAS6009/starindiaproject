import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import adminService from '../services/admin.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class AdminController {
  async getDashboard(req: AuthRequest, res: Response) {
    try {
      const dashboard = await adminService.getDashboard();
      sendResponse(res, 200, dashboard);
    } catch (error: any) {
      logger.error('Get dashboard error', { error: error.message });
      sendError(res, 500, 'Failed to fetch dashboard');
    }
  }

  async getUsers(req: AuthRequest, res: Response) {
    try {
      const { role, search, limit, cursor } = req.query;
      const result = await adminService.getUsers({
        role: role as string,
        search: search as string,
        limit: limit ? parseInt(limit as string) : undefined,
        cursor: cursor as string,
      });

      sendResponse(
        res,
        200,
        result.data,
        undefined,
        result.pagination
      );
    } catch (error: any) {
      logger.error('Get users error', { error: error.message });
      sendError(res, 500, 'Failed to fetch users');
    }
  }

  async approveContent(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { targetType, targetId, approved } = req.body;
      await adminService.approveContent(req.userId, {
        targetType,
        targetId,
        approved,
      });

      sendResponse(
        res,
        200,
        null,
        approved ? 'Content approved' : 'Content rejected'
      );
    } catch (error: any) {
      logger.error('Approve content error', { error: error.message });
      sendError(res, 500, error.message || 'Failed to approve content');
    }
  }

  async approvePayment(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { paymentId, approved } = req.body;
      await adminService.approvePayment(req.userId, paymentId, approved);

      sendResponse(
        res,
        200,
        null,
        approved ? 'Payment approved' : 'Payment rejected'
      );
    } catch (error: any) {
      logger.error('Approve payment error', { error: error.message });
      sendError(res, 500, error.message || 'Failed to approve payment');
    }
  }

  async getAuditLogs(req: AuthRequest, res: Response) {
    try {
      const { adminId, targetType, targetId, from, to, limit, cursor } = req.query;

      const result = await adminService.getAuditLogs({
        adminId: adminId as string,
        targetType: targetType as string,
        targetId: targetId as string,
        from: from ? new Date(from as string) : undefined,
        to: to ? new Date(to as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        cursor: cursor as string,
      });

      sendResponse(
        res,
        200,
        result.data,
        undefined,
        result.pagination
      );
    } catch (error: any) {
      logger.error('Get audit logs error', { error: error.message });
      sendError(res, 500, 'Failed to fetch audit logs');
    }
  }
}

export default new AdminController();

