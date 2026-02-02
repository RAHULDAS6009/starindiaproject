import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function OTTManagementPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">OTT Management</h1>
            <p className="text-text-muted">Manage OTT content and subscriptions</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Movies</p>
              <p className="text-2xl font-bold text-primary">234</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">TV Shows</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Active Subscribers</p>
              <p className="text-2xl font-bold text-green-400">12.5K</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Revenue (Monthly)</p>
              <p className="text-2xl font-bold text-secondary">₹2.5M</p>
            </div>
          </div>

          {/* Actions */}
          <div className="card mb-6">
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">+ Add Movie</button>
              <button className="btn-outline">+ Add TV Show</button>
              <button className="btn-outline">Manage Categories</button>
              <button className="btn-outline">View Analytics</button>
            </div>
          </div>

          {/* Content List */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
                  All Content
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  Movies
                </button>
                <button className="px-4 py-2 bg-dark-base text-text-muted rounded-lg font-semibold hover:text-white">
                  TV Shows
                </button>
              </div>
              <input
                type="text"
                placeholder="Search content..."
                className="input max-w-md"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="card cursor-pointer hover:border-primary transition-colors p-0">
                  <div className="aspect-[2/3] bg-dark-base rounded-t-lg"></div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Content {i}</h3>
                    <p className="text-xs text-text-muted">2024 • Action</p>
                    <div className="mt-2 flex gap-1">
                      <button className="text-xs text-primary hover:underline">Edit</button>
                      <span className="text-text-muted">•</span>
                      <button className="text-xs text-red-400 hover:underline">Delete</button>
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

