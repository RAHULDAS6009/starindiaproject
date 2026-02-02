import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Wallet</h1>

          {/* Balance Card */}
          <div className="card mb-8 bg-gradient-to-r from-primary to-secondary">
            <div className="text-center py-8">
              <p className="text-text-muted mb-2">Total Balance</p>
              <h2 className="text-5xl font-heading font-bold mb-4">₹5,000</h2>
              <button className="btn-outline bg-white text-dark-base border-white hover:bg-gray-100">
                Add Money
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card text-center cursor-pointer hover:border-primary transition-colors">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">Add Money</h3>
              <p className="text-sm text-text-muted">Top up your wallet</p>
            </div>
            <div className="card text-center cursor-pointer hover:border-primary transition-colors">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="font-semibold mb-2">Send Money</h3>
              <p className="text-sm text-text-muted">Transfer to others</p>
            </div>
            <div className="card text-center cursor-pointer hover:border-primary transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Transactions</h3>
              <p className="text-sm text-text-muted">View history</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="card">
            <h2 className="text-2xl font-heading font-semibold mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark-base flex items-center justify-center">
                      {i % 2 === 0 ? '📥' : '📤'}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {i % 2 === 0 ? 'Received' : 'Sent'} Payment
                      </p>
                      <p className="text-sm text-text-muted">2 hours ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${i % 2 === 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {i % 2 === 0 ? '+' : '-'}₹{i * 500}
                    </p>
                    <p className="text-sm text-text-muted">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

