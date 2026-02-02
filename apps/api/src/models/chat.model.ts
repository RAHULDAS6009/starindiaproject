import prisma from '../config/database';

// Note: Chat model not in schema yet - this is a placeholder
// In production, you'd add a ChatMessage model to Prisma schema
class ChatModel {
  async getHistory(userId: string, otherUserId: string, filters: {
    limit?: number;
    cursor?: string;
  }) {
    // Placeholder - implement when ChatMessage model is added
    // This would query messages between userId and otherUserId
    return {
      data: [],
      pagination: {
        cursor: undefined,
        hasMore: false,
      },
    };
  }

  async send(senderId: string, recipientId: string, message: string) {
    // Placeholder - implement when ChatMessage model is added
    return {
      id: 'placeholder',
      senderId,
      recipientId,
      message,
      createdAt: new Date(),
    };
  }
}

export default new ChatModel();

