import AdminSidebar from '@/components/layout/AdminSidebar';
import AdminHeader from '@/components/layout/AdminHeader';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-dark-bg">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Settings & Security</h1>
            <p className="text-text-muted">Manage platform settings and security</p>
          </div>

          <div className="space-y-6">
            {/* General Settings */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">General Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Platform Name</label>
                  <input type="text" className="input w-full" defaultValue="Star India Entertainment" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Support Email</label>
                  <input type="email" className="input w-full" defaultValue="support@starindia.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Maintenance Mode</label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-text-muted">Enable maintenance mode</span>
                  </label>
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Security</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Session Timeout (minutes)</label>
                  <input type="number" className="input w-full" defaultValue="30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Max Login Attempts</label>
                  <input type="number" className="input w-full" defaultValue="5" />
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Require 2FA for admin accounts</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Enable IP whitelist</span>
                  </label>
                </div>
                <button className="btn-primary">Update Security</button>
              </div>
            </div>

            {/* Email Settings */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Email Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">SMTP Host</label>
                  <input type="text" className="input w-full" placeholder="smtp.example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">SMTP Port</label>
                  <input type="number" className="input w-full" placeholder="587" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">SMTP Username</label>
                  <input type="text" className="input w-full" placeholder="your-email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">SMTP Password</label>
                  <input type="password" className="input w-full" placeholder="••••••••" />
                </div>
                <button className="btn-primary">Test Connection</button>
              </div>
            </div>

            {/* API Keys */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">API Keys</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">CDN Base URL</label>
                  <input type="url" className="input w-full" placeholder="https://cdn.starindia.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Firebase Server Key</label>
                  <input type="text" className="input w-full" placeholder="Your Firebase key" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">OneSignal App ID</label>
                  <input type="text" className="input w-full" placeholder="Your OneSignal App ID" />
                </div>
                <button className="btn-primary">Save API Keys</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

