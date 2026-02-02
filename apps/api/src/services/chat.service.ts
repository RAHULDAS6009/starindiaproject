import chatModel from '../models/chat.model';

class ChatService {
  async getHistory(userId: string, otherUserId: string, filters: {
    limit?: number;
    cursor?: string;
  }) {
    return chatModel.getHistory(userId, otherUserId, filters);
  }

  async send(senderId: string, recipientId: string, message: string) {
    return chatModel.send(senderId, recipientId, message);
  }
}

export default new ChatService();

