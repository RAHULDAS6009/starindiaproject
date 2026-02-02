import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './config/env';
import { logger } from './utils/logger';

// Routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import adminRoutes from './routes/admin.routes';
import reelRoutes from './routes/reel.routes';
import postRoutes from './routes/post.routes';
import newsRoutes from './routes/news.routes';
import castingRoutes from './routes/casting.routes';
import chatRoutes from './routes/chat.routes';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: env.CORS_ORIGIN.split(','),
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reel', reelRoutes);
app.use('/api/post', postRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/casting', castingRoutes);
app.use('/api/chat', chatRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error', { error: err.message, stack: err.stack });
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

const PORT = env.PORT;

app.listen(PORT, () => {
  logger.info(`🚀 API server running on port ${PORT}`);
  logger.info(`Environment: ${env.NODE_ENV}`);
});

