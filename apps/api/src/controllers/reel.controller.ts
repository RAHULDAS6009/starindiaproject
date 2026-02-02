import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import reelService from '../services/reel.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class ReelController {
  async getFeed(req: AuthRequest, res: Response) {
    try {
      const { limit, cursor } = req.query;
      const result = await reelService.getFeed({
        userId: req.userId,
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
      logger.error('Get feed error', { error: error.message });
      sendError(res, 500, 'Failed to fetch feed');
    }
  }

  async upload(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { mediaUrl, caption } = req.body;
      const reel = await reelService.upload(req.userId, { mediaUrl, caption });

      sendResponse(res, 201, reel, 'Reel uploaded successfully');
    } catch (error: any) {
      logger.error('Upload reel error', { error: error.message });
      sendError(res, 500, error.message || 'Failed to upload reel');
    }
  }

  async like(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { targetId, targetType } = req.body;
      await reelService.like(req.userId, targetId, targetType);

      sendResponse(res, 200, null, 'Liked successfully');
    } catch (error: any) {
      logger.error('Like error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to like');
    }
  }
}

export default new ReelController();

