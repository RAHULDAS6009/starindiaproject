import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function AuditPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Audit Logs</h1>
            <p className="text-text-muted">View all admin actions and system events</p>
          </div>

          {/* Filters */}
          <div className="card mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">From Date</label>
                <input type="date" className="input w-full" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">To Date</label>
                <input type="date" className="input w-full" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Admin</label>
                <select className="input w-full">
                  <option>All Admins</option>
                  <option>Super Admin</option>
                  <option>Sub Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Action</label>
                <select className="input w-full">
                  <option>All Actions</option>
                  <option>CREATE</option>
                  <option>UPDATE</option>
                  <option>DELETE</option>
                  <option>APPROVE</option>
                  <option>REJECT</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn-primary">Apply Filters</button>
              <button className="btn-outline">Reset</button>
              <button className="btn-outline">Export</button>
            </div>
          </div>

          {/* Audit Logs Table */}
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 font-semibold">Timestamp</th>
                    <th className="text-left p-4 font-semibold">Admin</th>
                    <th className="text-left p-4 font-semibold">Action</th>
                    <th className="text-left p-4 font-semibold">Target</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-dark-base transition-colors">
                      <td className="p-4 text-text-muted text-sm">
                        Jan {i}, 2024 14:3{i}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                          <span className="font-semibold">Admin {i % 2 === 0 ? 'A' : 'B'}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-dark-base text-xs rounded">
                          {i % 3 === 0 ? 'APPROVE' : i % 2 === 0 ? 'UPDATE' : 'CREATE'}
                        </span>
                      </td>
                      <td className="p-4 text-sm">
                        {i % 3 === 0 ? 'Payment' : i % 2 === 0 ? 'User' : 'Content'}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                          Success
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="text-primary hover:underline text-sm">View</button>
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

