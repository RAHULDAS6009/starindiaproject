import castingModel from '../models/casting.model';

class CastingService {
  async list(filters: {
    status?: string;
    limit?: number;
    cursor?: string;
  }) {
    return castingModel.list(filters);
  }

  async apply(userId: string, castingId: string, message?: string) {
    return castingModel.apply(userId, castingId, message);
  }
}

export default new CastingService();

