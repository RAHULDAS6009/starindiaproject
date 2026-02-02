import Link from 'next/link';

export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-heading font-bold text-primary mb-2 text-center">
          Admin Panel
        </h1>
        <p className="text-text-muted text-center mb-8">
          Star India Entertainment
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="admin@starindia.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-muted">
          <Link href="/dashboard" className="text-primary hover:underline">
            Go to Dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
}

