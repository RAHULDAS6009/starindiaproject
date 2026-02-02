import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function AdsPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Ads & Promotions</h1>
            <p className="text-text-muted">Manage advertisements and promotional campaigns</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Active Ads</p>
              <p className="text-2xl font-bold text-primary">18</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Pending Approval</p>
              <p className="text-2xl font-bold text-yellow-400">5</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-secondary">₹450K</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Advertisers</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>

          {/* Actions */}
          <div className="card mb-6">
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">+ Create Campaign</button>
              <button className="btn-outline">View Requests</button>
              <button className="btn-outline">Analytics</button>
            </div>
          </div>

          {/* Ads List */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
                  All
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  Active
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  Pending
                </button>
              </div>
              <input
                type="text"
                placeholder="Search ads..."
                className="input max-w-md"
              />
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex gap-4">
                    <div className="w-32 h-32 bg-dark-base rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold mb-1">Ad Campaign {i}</h3>
                          <p className="text-sm text-text-muted">Advertiser Name • Started 3 days ago</p>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                          Active
                        </span>
                      </div>
                      <p className="text-text-muted text-sm mb-4">
                        Campaign description and details...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-text-muted">
                          <span>Impressions: <span className="text-white font-semibold">12.5K</span></span>
                          <span>Clicks: <span className="text-white font-semibold">234</span></span>
                          <span>Budget: <span className="text-white font-semibold">₹{i * 5000}</span></span>
                        </div>
                        <div className="flex gap-2">
                          <button className="btn-outline text-sm px-4 py-2">View</button>
                          <button className="btn-primary text-sm px-4 py-2">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

