import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Settings</h1>

          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="input w-full" defaultValue="User Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Bio</label>
                  <textarea
                    className="input w-full h-24 resize-none"
                    defaultValue="Your bio here..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="input w-full" defaultValue="user@example.com" />
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Privacy</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <span>Make profile public</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between">
                  <span>Show email</span>
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span>Allow messages from anyone</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
              </div>
            </div>

            {/* Security */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Security</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Current Password</label>
                  <input type="password" className="input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">New Password</label>
                  <input type="password" className="input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
                  <input type="password" className="input w-full" />
                </div>
                <button className="btn-primary">Update Password</button>
              </div>
            </div>

            {/* Notifications */}
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <span>Email notifications</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between">
                  <span>Push notifications</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between">
                  <span>New follower alerts</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

