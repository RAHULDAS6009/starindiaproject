import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="card max-w-md w-full">
          <h1 className="text-3xl font-heading font-bold text-center mb-2">Login</h1>
          <p className="text-text-muted text-center mb-8">
            Welcome back to Star India Entertainment
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-text-muted">Remember me</span>
              </label>
              <Link href="/auth/forgot" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-muted text-sm">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

