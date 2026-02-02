import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function ContentPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Content Moderation</h1>
            <p className="text-text-muted">Review and moderate user content</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Pending Review</p>
              <p className="text-2xl font-bold text-primary">24</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Approved Today</p>
              <p className="text-2xl font-bold text-green-400">156</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Rejected Today</p>
              <p className="text-2xl font-bold text-red-400">8</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Content</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>

          {/* Content List */}
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
                  Rejected
                </button>
              </div>
              <select className="input min-w-[150px]">
                <option>All Types</option>
                <option>Posts</option>
                <option>Reels</option>
                <option>Comments</option>
              </select>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex gap-4">
                    <div className="w-32 h-32 bg-dark-base rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold mb-1">Content Title {i}</h3>
                          <p className="text-sm text-text-muted">By @username • 2 hours ago</p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded">
                          Pending
                        </span>
                      </div>
                      <p className="text-text-muted text-sm mb-4 line-clamp-2">
                        Content description or preview text goes here...
                      </p>
                      <div className="flex gap-2">
                        <button className="btn-primary text-sm px-4 py-2">Approve</button>
                        <button className="btn-outline text-sm px-4 py-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                          Reject
                        </button>
                        <button className="btn-outline text-sm px-4 py-2">View Details</button>
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

