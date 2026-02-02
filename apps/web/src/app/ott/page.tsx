import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function OTTPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[60vh] bg-dark-base">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-heading font-bold text-white mb-4">
                Premium OTT Content
              </h1>
              <p className="text-xl text-text-muted mb-8">
                Stream exclusive Bollywood movies and shows
              </p>
              <button className="btn-primary">Start Watching</button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Featured Content */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card cursor-pointer hover:border-primary transition-colors">
                  <div className="aspect-video bg-dark-base rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">Featured Movie {i}</h3>
                  <p className="text-sm text-text-muted">2024 • Action • 2h 30m</p>
                </div>
              ))}
            </div>
          </section>

          {/* Movies */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-6">Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="card cursor-pointer hover:border-primary transition-colors">
                  <div className="aspect-[2/3] bg-dark-base rounded-lg mb-2"></div>
                  <h3 className="font-semibold text-sm">Movie {i}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* TV Shows */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-6">TV Shows</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="card cursor-pointer hover:border-primary transition-colors">
                  <div className="aspect-[2/3] bg-dark-base rounded-lg mb-2"></div>
                  <h3 className="font-semibold text-sm">TV Show {i}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

