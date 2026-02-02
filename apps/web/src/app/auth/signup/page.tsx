import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="card max-w-md w-full">
          <h1 className="text-3xl font-heading font-bold text-center mb-2">Sign Up</h1>
          <p className="text-text-muted text-center mb-8">
            Join Star India Entertainment
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input w-full"
              />
            </div>
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
            <div>
              <label className="block text-sm font-semibold mb-2">Role</label>
              <select className="input w-full">
                <option>General User</option>
                <option>Artist</option>
                <option>Production</option>
                <option>Casting</option>
              </select>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-text-muted">
                  I agree to the Terms & Conditions
                </span>
              </label>
            </div>
            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-muted text-sm">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

