'use client';

export default function AdminHeader() {
  return (
    <header className="bg-dark-base border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-heading font-semibold">Admin Dashboard</h2>
          <p className="text-sm text-text-muted">Welcome back, Admin</p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-text-muted hover:text-white transition-colors">
            🔔
          </button>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
}

