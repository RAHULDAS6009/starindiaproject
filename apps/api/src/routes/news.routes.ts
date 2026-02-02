import { Router } from 'express';
import newsController from '../controllers/news.controller';
import { optionalAuth } from '../middlewares/auth';

const router = Router();

router.use(optionalAuth);

router.get('/list', newsController.list.bind(newsController));
router.get('/details/:id', newsController.getDetails.bind(newsController));

export default router;

