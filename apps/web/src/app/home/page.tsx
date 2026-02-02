import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Video Section */}
        <section className="relative h-[70vh] bg-dark-base">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-heading font-bold text-white mb-4">
                Welcome to Star India Entertainment
              </h1>
              <p className="text-xl text-text-muted mb-8">
                Premium Bollywood Content & OTT Platform
              </p>
              <button className="btn-primary">Watch Now</button>
            </div>
          </div>
        </section>

        {/* Stories/Status Section */}
        <section className="py-8 bg-dark-base">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-semibold mb-6">Stories</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-dark-base"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reels Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-semibold mb-6">Trending Reels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card">
                  <div className="aspect-video bg-dark-base rounded-lg mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Reel {i}</h3>
                      <p className="text-sm text-text-muted">@username</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">❤️ 1.2K</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-8 bg-dark-base">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-semibold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card cursor-pointer hover:border-primary transition-colors">
                  <div className="aspect-video bg-dark-bg rounded-lg mb-4"></div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Breaking News {i}
                  </h3>
                  <p className="text-text-muted text-sm">
                    Latest updates from the entertainment industry...
                  </p>
                  <span className="text-xs text-text-muted mt-2 block">2 hours ago</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

