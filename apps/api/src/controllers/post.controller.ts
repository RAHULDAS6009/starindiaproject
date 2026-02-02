import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import postService from '../services/post.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class PostController {
  async getFeed(req: AuthRequest, res: Response) {
    try {
      const { limit, cursor } = req.query;
      const result = await postService.getFeed({
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

  async comment(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { postId, text } = req.body;
      const comment = await postService.comment(req.userId, postId, text);

      sendResponse(res, 201, comment, 'Comment added successfully');
    } catch (error: any) {
      logger.error('Comment error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to add comment');
    }
  }
}

export default new PostController();

