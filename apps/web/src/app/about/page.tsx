import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">About Us</h1>
            <p className="text-xl text-text-muted">
              Star India Entertainment - Premium Bollywood Platform
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">Our Story</h2>
            <p className="text-text-muted mb-4">
              Star India Entertainment is India's premier entertainment platform, bringing you
              the best of Bollywood content, casting opportunities, and exclusive OTT experiences.
            </p>
            <p className="text-text-muted">
              We connect talented artists with production houses, provide a platform for content
              creators, and deliver premium entertainment to millions of viewers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Premium Content</h3>
              <p className="text-text-muted text-sm">
                Exclusive movies, shows, and original content
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Casting Platform</h3>
              <p className="text-text-muted text-sm">
                Connect artists with opportunities
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Community</h3>
              <p className="text-text-muted text-sm">
                Join millions of entertainment enthusiasts
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

