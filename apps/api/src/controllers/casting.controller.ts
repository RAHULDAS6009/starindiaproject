import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import castingService from '../services/casting.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class CastingController {
  async list(req: AuthRequest, res: Response) {
    try {
      const { status, limit, cursor } = req.query;
      const result = await castingService.list({
        status: status as string,
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
      logger.error('List castings error', { error: error.message });
      sendError(res, 500, 'Failed to fetch castings');
    }
  }

  async apply(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { castingId, message } = req.body;
      const application = await castingService.apply(req.userId, castingId, message);

      sendResponse(res, 201, application, 'Application submitted successfully');
    } catch (error: any) {
      logger.error('Apply casting error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to apply');
    }
  }
}

export default new CastingController();

