import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import userService from '../services/user.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class UserController {
  async getProfile(req: AuthRequest, res: Response) {
    try {
      const userId = req.params.id || req.userId;
      if (!userId) {
        sendError(res, 400, 'User ID required');
        return;
      }

      const profile = await userService.getProfile(userId);
      if (!profile) {
        sendError(res, 404, 'User not found');
        return;
      }

      sendResponse(res, 200, profile);
    } catch (error: any) {
      logger.error('Get profile error', { error: error.message });
      sendError(res, 500, 'Failed to fetch profile');
    }
  }

  async updateProfile(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { name, bio, profilePic, status } = req.body;
      const updated = await userService.updateProfile(req.userId, {
        name,
        bio,
        profilePic,
        status,
      });

      sendResponse(res, 200, updated, 'Profile updated successfully');
    } catch (error: any) {
      logger.error('Update profile error', { error: error.message });
      sendError(res, 500, 'Failed to update profile');
    }
  }

  async follow(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { userId: followingId } = req.params;
      if (!followingId) {
        sendError(res, 400, 'User ID required');
        return;
      }

      await userService.follow(req.userId, followingId);
      sendResponse(res, 200, null, 'Followed successfully');
    } catch (error: any) {
      logger.error('Follow error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to follow');
    }
  }

  async unfollow(req: AuthRequest, res: Response) {
    try {
      if (!req.userId) {
        sendError(res, 401, 'Authentication required');
        return;
      }

      const { userId: followingId } = req.params;
      if (!followingId) {
        sendError(res, 400, 'User ID required');
        return;
      }

      await userService.unfollow(req.userId, followingId);
      sendResponse(res, 200, null, 'Unfollowed successfully');
    } catch (error: any) {
      logger.error('Unfollow error', { error: error.message });
      sendError(res, 400, error.message || 'Failed to unfollow');
    }
  }
}

export default new UserController();

