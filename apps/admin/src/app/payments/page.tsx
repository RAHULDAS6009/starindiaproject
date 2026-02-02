import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Payments & Wallet</h1>
            <p className="text-text-muted">Manage payments and wallet transactions</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Pending Approvals</p>
              <p className="text-2xl font-bold text-yellow-400">12</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-secondary">₹2.5M</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Transactions Today</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Wallets</p>
              <p className="text-2xl font-bold text-primary">8.5K</p>
            </div>
          </div>

          {/* Payments Table */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
                  Pending
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  Approved
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  All
                </button>
              </div>
              <input
                type="text"
                placeholder="Search transactions..."
                className="input max-w-md"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 font-semibold">Transaction ID</th>
                    <th className="text-left p-4 font-semibold">User</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Amount</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-dark-base transition-colors">
                      <td className="p-4 text-text-muted font-mono text-sm">TXN{i.toString().padStart(6, '0')}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                          <span className="font-semibold">User {i}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">
                          {i % 3 === 0 ? 'Wallet Topup' : i % 2 === 0 ? 'Casting Payment' : 'Subscription'}
                        </span>
                      </td>
                      <td className="p-4 font-semibold">₹{i * 500}</td>
                      <td className="p-4">
                        {i % 3 === 0 ? (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                            Pending
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                            Approved
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-text-muted text-sm">Jan {i}, 2024</td>
                      <td className="p-4">
                        {i % 3 === 0 ? (
                          <div className="flex gap-2">
                            <button className="text-green-400 hover:underline text-sm">Approve</button>
                            <button className="text-red-400 hover:underline text-sm">Reject</button>
                          </div>
                        ) : (
                          <button className="text-primary hover:underline text-sm">View</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

