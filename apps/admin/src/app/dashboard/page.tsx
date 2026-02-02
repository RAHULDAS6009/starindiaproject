import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Dashboard</h1>
            <p className="text-text-muted">Key Performance Indicators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">Total Users</p>
                  <p className="text-3xl font-bold text-primary">0</p>
                </div>
                <div className="text-4xl">👥</div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">Total Posts</p>
                  <p className="text-3xl font-bold text-secondary">0</p>
                </div>
                <div className="text-4xl">📝</div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">Total Castings</p>
                  <p className="text-3xl font-bold text-primary">0</p>
                </div>
                <div className="text-4xl">🎭</div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm mb-1">Pending Payments</p>
                  <p className="text-3xl font-bold text-cta-hover">0</p>
                </div>
                <div className="text-4xl">💰</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-heading font-semibold mb-4">Recent Users</h2>
              <div className="text-text-muted text-sm">
                No users yet. Data will appear here after seeding.
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-heading font-semibold mb-4">Activity Log</h2>
              <div className="text-text-muted text-sm">
                No recent activity. Audit logs will appear here.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

