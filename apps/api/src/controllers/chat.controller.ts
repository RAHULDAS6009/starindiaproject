import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import chatService from '../services/chat.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class ChatController {
  async getHistory(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { userId: otherUserId } = req.params;
      const { limit, cursor } = req.query;

      const result = await chatService.getHistory(req.userId, otherUserId, {
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
      logger.error('Get chat history error', { error: error.message });
      sendError(res, 500, 'Failed to fetch chat history');
    }
  }

  async send(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { recipientId, message } = req.body;
      const chatMessage = await chatService.send(req.userId, recipientId, message);

      sendResponse(res, 201, chatMessage, 'Message sent successfully');
    } catch (error: any) {
      logger.error('Send message error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to send message');
    }
  }
}

export default new ChatController();

