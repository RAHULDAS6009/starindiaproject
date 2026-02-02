import newsModel from '../models/news.model';

class NewsService {
  async list(filters: {
    limit?: number;
    cursor?: string;
  }) {
    return newsModel.list(filters);
  }

  async getDetails(id: string) {
    return newsModel.findById(id);
  }
}

export default new NewsService();

