import reelModel from '../models/reel.model';

class ReelService {
  async getFeed(filters: {
    userId?: string;
    limit?: number;
    cursor?: string;
  }) {
    return reelModel.getFeed(filters);
  }

  async upload(userId: string, data: { mediaUrl: string; caption?: string }) {
    return reelModel.create(userId, data);
  }

  async like(userId: string, targetId: string, targetType: string) {
    return reelModel.toggleLike(userId, targetId, targetType);
  }
}

export default new ReelService();

