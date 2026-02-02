import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">User Management</h1>
            <p className="text-text-muted">Manage all platform users</p>
          </div>

          {/* Filters */}
          <div className="card mb-6">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Search users..."
                className="input flex-1 min-w-[200px]"
              />
              <select className="input min-w-[150px]">
                <option>All Roles</option>
                <option>General User</option>
                <option>Artist</option>
                <option>Production</option>
                <option>Casting</option>
                <option>Admin</option>
              </select>
              <button className="btn-primary">Search</button>
            </div>
          </div>

          {/* Users Table */}
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 font-semibold">User</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Joined</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-dark-base transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                          <div>
                            <p className="font-semibold">User {i}</p>
                            <p className="text-sm text-text-muted">@username{i}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-text-muted">user{i}@example.com</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-dark-base text-xs rounded">
                          {i % 3 === 0 ? 'Artist' : i % 2 === 0 ? 'User' : 'Production'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                          Active
                        </span>
                      </td>
                      <td className="p-4 text-text-muted text-sm">Jan 2024</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="text-primary hover:underline text-sm">View</button>
                          <button className="text-secondary hover:underline text-sm">Edit</button>
                          <button className="text-red-400 hover:underline text-sm">Ban</button>
                        </div>
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

