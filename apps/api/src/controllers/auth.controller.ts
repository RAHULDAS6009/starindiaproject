import { Request, Response } from 'express';
import authService from '../services/auth.service';
import { sendResponse, sendError } from '../utils/response';
import { logger } from '../utils/logger';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;
      const user = await authService.register({ name, email, password, role });
      sendResponse(res, 201, user, 'User registered successfully');
    } catch (error: any) {
      logger.error('Registration error', { error: error.message });
      sendError(res, 400, error.message || 'Registration failed');
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      sendResponse(res, 200, result, 'Login successful');
    } catch (error: any) {
      logger.error('Login error', { error: error.message });
      sendError(res, 401, error.message || 'Login failed');
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        sendError(res, 400, 'Refresh token required');
        return;
      }

      const tokens = await authService.refreshToken(refreshToken);
      sendResponse(res, 200, tokens, 'Token refreshed');
    } catch (error: any) {
      logger.error('Token refresh error', { error: error.message });
      sendError(res, 401, error.message || 'Token refresh failed');
    }
  }
}

export default new AuthController();

