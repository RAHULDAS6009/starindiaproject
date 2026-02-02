import userModel from '../models/user.model';

class UserService {
  async getProfile(userId: string) {
    return userModel.findById(userId);
  }

  async updateProfile(userId: string, data: {
    name?: string;
    bio?: string;
    profilePic?: string;
    status?: string;
  }) {
    return userModel.updateProfile(userId, data);
  }

  async follow(followerId: string, followingId: string) {
    return userModel.follow(followerId, followingId);
  }

  async unfollow(followerId: string, followingId: string) {
    return userModel.unfollow(followerId, followingId);
  }

  async getFollowers(userId: string) {
    return userModel.getFollowers(userId);
  }

  async getFollowing(userId: string) {
    return userModel.getFollowing(userId);
  }
}

export default new UserService();

