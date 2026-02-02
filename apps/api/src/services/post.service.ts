import postModel from '../models/post.model';

class PostService {
  async getFeed(filters: {
    userId?: string;
    limit?: number;
    cursor?: string;
  }) {
    return postModel.getFeed(filters);
  }

  async comment(userId: string, postId: string, text: string) {
    return postModel.addComment(userId, postId, text);
  }
}

export default new PostService();

