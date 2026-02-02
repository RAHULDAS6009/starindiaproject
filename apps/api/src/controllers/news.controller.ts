import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import newsService from '../services/news.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class NewsController {
  async list(req: AuthRequest, res: Response) {
    try {
      const { limit, cursor } = req.query;
      const result = await newsService.list({
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
      logger.error('List news error', { error: error.message });
      sendError(res, 500, 'Failed to fetch news');
    }
  }

  async getDetails(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;
      const news = await newsService.getDetails(id);

      if (!news) {
        sendError(res, 404, 'News not found');
        return;
      }

      sendResponse(res, 200, news);
    } catch (error: any) {
      logger.error('Get news details error', { error: error.message });
      sendError(res, 500, 'Failed to fetch news details');
    }
  }
}

export default new NewsController();

