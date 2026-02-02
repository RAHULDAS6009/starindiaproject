import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    cursor?: string;
    hasMore: boolean;
  };
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  data?: T,
  message?: string,
  pagination?: ApiResponse<T>['pagination']
): Response => {
  const response: ApiResponse<T> = {
    success: statusCode >= 200 && statusCode < 300,
    ...(data && { data }),
    ...(message && { message }),
    ...(pagination && { pagination }),
  };

  return res.status(statusCode).json(response);
};

export const sendError = (
  res: Response,
  statusCode: number,
  error: string
): Response => {
  return res.status(statusCode).json({
    success: false,
    error,
  });
};

