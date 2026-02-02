import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function CastingPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Casting & Projects</h1>
            <p className="text-text-muted">Manage casting opportunities and projects</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Active Castings</p>
              <p className="text-2xl font-bold text-primary">12</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Total Applications</p>
              <p className="text-2xl font-bold">456</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Pending Approval</p>
              <p className="text-2xl font-bold text-yellow-400">8</p>
            </div>
            <div className="card">
              <p className="text-text-muted text-sm mb-1">Completed</p>
              <p className="text-2xl font-bold text-green-400">23</p>
            </div>
          </div>

          {/* Castings List */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <input
                type="text"
                placeholder="Search castings..."
                className="input flex-1 max-w-md"
              />
              <button className="btn-primary">+ New Casting</button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        Project Name {i}
                      </h3>
                      <p className="text-text-muted">Production Company • Created 2 days ago</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-dark-base text-xs font-semibold rounded">
                      Open
                    </span>
                  </div>
                  <p className="text-text-muted mb-4">
                    Looking for talented actors for an upcoming Bollywood project...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-text-muted">Applications: <span className="text-white font-semibold">45</span></span>
                      <span className="text-text-muted">Shortlisted: <span className="text-white font-semibold">12</span></span>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-outline text-sm px-4 py-2">View Details</button>
                      <button className="btn-primary text-sm px-4 py-2">Manage</button>
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

