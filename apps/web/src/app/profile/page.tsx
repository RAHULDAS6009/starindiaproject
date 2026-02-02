import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-dark-base"></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h1 className="text-3xl font-heading font-bold">User Name</h1>
                  <span className="px-2 py-1 bg-secondary text-dark-base text-xs font-semibold rounded">
                    Verified
                  </span>
                </div>
                <p className="text-text-muted mb-4">@username • Actor • Model</p>
                <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
                  <div>
                    <span className="font-semibold">1.2K</span>
                    <span className="text-text-muted text-sm ml-1">Posts</span>
                  </div>
                  <div>
                    <span className="font-semibold">12K</span>
                    <span className="text-text-muted text-sm ml-1">Followers</span>
                  </div>
                  <div>
                    <span className="font-semibold">500</span>
                    <span className="text-text-muted text-sm ml-1">Following</span>
                  </div>
                </div>
                <button className="btn-outline">Edit Profile</button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="card mb-8">
            <h2 className="text-xl font-heading font-semibold mb-4">About</h2>
            <p className="text-text-muted">
              Professional actor and model with 5+ years of experience in Bollywood.
              Passionate about storytelling and bringing characters to life.
            </p>
          </div>

          {/* Posts Grid */}
          <div>
            <h2 className="text-2xl font-heading font-semibold mb-6">Posts</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="aspect-square bg-dark-base rounded-lg cursor-pointer hover:opacity-80 transition-opacity"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

