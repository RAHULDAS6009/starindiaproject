import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Reports & Analytics</h1>
            <p className="text-text-muted">View platform analytics and generate reports</p>
          </div>

          {/* Date Range Selector */}
          <div className="card mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <label className="text-sm font-semibold">Date Range:</label>
              <input type="date" className="input" defaultValue="2024-01-01" />
              <span className="text-text-muted">to</span>
              <input type="date" className="input" defaultValue="2024-01-31" />
              <button className="btn-primary">Generate Report</button>
              <button className="btn-outline">Export CSV</button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Users</p>
              <p className="text-3xl font-bold text-primary">12,456</p>
              <p className="text-sm text-green-400 mt-2">+12% from last month</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Active Users</p>
              <p className="text-3xl font-bold">8,234</p>
              <p className="text-sm text-green-400 mt-2">+8% from last month</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Content Uploads</p>
              <p className="text-3xl font-bold text-secondary">1,234</p>
              <p className="text-sm text-green-400 mt-2">+15% from last month</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Revenue</p>
              <p className="text-3xl font-bold text-cta-hover">₹2.5M</p>
              <p className="text-sm text-green-400 mt-2">+20% from last month</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="card">
              <h2 className="text-xl font-heading font-semibold mb-4">User Growth</h2>
              <div className="h-64 bg-dark-base rounded-lg flex items-center justify-center text-text-muted">
                Chart placeholder - User growth over time
              </div>
            </div>
            <div className="card">
              <h2 className="text-xl font-heading font-semibold mb-4">Content Distribution</h2>
              <div className="h-64 bg-dark-base rounded-lg flex items-center justify-center text-text-muted">
                Chart placeholder - Content types distribution
              </div>
            </div>
          </div>

          {/* Detailed Reports */}
          <div className="card">
            <h2 className="text-xl font-heading font-semibold mb-4">Detailed Reports</h2>
            <div className="space-y-4">
              {['User Activity Report', 'Content Performance Report', 'Revenue Report', 'Casting Analytics'].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:border-primary transition-colors">
                  <div>
                    <h3 className="font-semibold mb-1">{report}</h3>
                    <p className="text-sm text-text-muted">Generated on Jan {i + 1}, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-outline text-sm px-4 py-2">View</button>
                    <button className="btn-primary text-sm px-4 py-2">Download</button>
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

