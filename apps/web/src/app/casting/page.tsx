import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CastingPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Casting Opportunities</h1>
          <p className="text-text-muted">
            Discover exciting casting opportunities in Bollywood
          </p>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-wrap gap-4">
            <select className="input flex-1 min-w-[200px]">
              <option>All Categories</option>
              <option>Movies</option>
              <option>TV Shows</option>
              <option>Web Series</option>
            </select>
            <select className="input flex-1 min-w-[200px]">
              <option>All Status</option>
              <option>Open</option>
              <option>Closed</option>
            </select>
            <button className="btn-primary">Search</button>
          </div>
        </div>

        {/* Casting List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Project Name {i}
                  </h3>
                  <p className="text-sm text-text-muted">Production Company</p>
                </div>
                <span className="px-3 py-1 bg-secondary text-dark-base text-xs font-semibold rounded">
                  Open
                </span>
              </div>
              <p className="text-text-muted text-sm mb-4 line-clamp-3">
                Looking for talented actors for an upcoming Bollywood project. 
                We are seeking individuals with strong acting skills...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">50+ Applications</span>
                <button className="btn-outline text-sm px-4 py-2">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

