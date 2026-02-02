import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Messages</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat List */}
            <div className="lg:col-span-1 card p-0">
              <div className="p-4 border-b border-gray-800">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="input w-full"
                />
              </div>
              <div className="divide-y divide-gray-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 cursor-pointer hover:bg-dark-base transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">User {i}</h3>
                          <span className="text-xs text-text-muted">2h</span>
                        </div>
                        <p className="text-sm text-text-muted truncate">
                          Last message preview...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-2 card p-0 flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                <div>
                  <h3 className="font-semibold">User Name</h3>
                  <p className="text-xs text-text-muted">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        i % 2 === 0
                          ? 'bg-primary text-white'
                          : 'bg-dark-base text-white'
                      }`}
                    >
                      <p>Message {i} content goes here...</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {i % 2 === 0 ? '2:30 PM' : '2:25 PM'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="input flex-1"
                  />
                  <button className="btn-primary px-6">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

