import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Artists</h1>
          <p className="text-text-muted">
            Discover talented artists and performers
          </p>
        </div>

        {/* Search Bar */}
        <div className="card mb-8">
          <input
            type="text"
            placeholder="Search artists..."
            className="input w-full"
          />
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="card text-center hover:border-primary transition-colors cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary mx-auto mb-4 p-1">
                <div className="w-full h-full rounded-full bg-dark-base"></div>
              </div>
              <h3 className="font-semibold mb-1">Artist Name {i}</h3>
              <p className="text-sm text-text-muted mb-2">Actor • Model</p>
              {i % 3 === 0 && (
                <span className="inline-block px-2 py-1 bg-secondary text-dark-base text-xs font-semibold rounded">
                  Verified
                </span>
              )}
              <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <span>👥 12K</span>
                <span>❤️ 5K</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

