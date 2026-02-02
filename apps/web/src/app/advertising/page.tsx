import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">Advertising</h1>
            <p className="text-xl text-text-muted">
              Promote your brand with Star India Entertainment
            </p>
          </div>

          {/* Hero Section */}
          <section className="card mb-12 text-center">
            <h2 className="text-3xl font-heading font-semibold mb-4">
              Reach Millions of Viewers
            </h2>
            <p className="text-text-muted mb-8">
              Advertise on India's premier entertainment platform
            </p>
            <button className="btn-primary">Get Started</button>
          </section>

          {/* Advertising Options */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Video Ads</h3>
              <p className="text-text-muted text-sm">
                Reach audiences with engaging video advertisements
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Banner Ads</h3>
              <p className="text-text-muted text-sm">
                Display your brand across our platform
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Sponsored Content</h3>
              <p className="text-text-muted text-sm">
                Integrate your brand into our content
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="card">
            <h2 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Company Name</label>
                <input type="text" className="input w-full" placeholder="Your company" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="input w-full" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  className="input w-full h-32 resize-none"
                  placeholder="Tell us about your advertising needs..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

