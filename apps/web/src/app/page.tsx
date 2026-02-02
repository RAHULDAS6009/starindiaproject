import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-bg to-secondary/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Star India Entertainment
            </h1>
            <p className="text-2xl md:text-3xl text-text-muted mb-8 font-light">
              Premium Bollywood • OTT Platform • Casting Hub
            </p>
            <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
              Your gateway to India's premier entertainment ecosystem. Connect, create, and consume premium Bollywood content all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn-primary text-lg px-8 py-4">
                Get Started Free
              </Link>
              <Link href="/home" className="btn-outline text-lg px-8 py-4">
                Explore Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-base">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Everything you need for entertainment, casting, and content creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OTT Streaming */}
            <div className="card hover:border-primary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">OTT Streaming</h3>
              <p className="text-text-muted mb-4">
                Stream exclusive Bollywood movies, TV shows, and original content. Premium quality entertainment at your fingertips.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ HD & 4K Quality</li>
                <li>✓ Exclusive Originals</li>
                <li>✓ Multiple Devices</li>
                <li>✓ Offline Downloads</li>
              </ul>
              <Link href="/ott" className="text-primary hover:underline font-semibold">
                Explore OTT →
              </Link>
            </div>

            {/* Casting Platform */}
            <div className="card hover:border-secondary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Casting Platform</h3>
              <p className="text-text-muted mb-4">
                Connect talented artists with production houses. Discover casting opportunities and build your career in Bollywood.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ Verified Casting Calls</li>
                <li>✓ Direct Applications</li>
                <li>✓ Portfolio Showcase</li>
                <li>✓ Payment Integration</li>
              </ul>
              <Link href="/casting" className="text-secondary hover:underline font-semibold">
                Browse Castings →
              </Link>
            </div>

            {/* Artist Network */}
            <div className="card hover:border-primary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Artist Network</h3>
              <p className="text-text-muted mb-4">
                Discover and connect with talented artists, actors, models, and performers. Build your network in the industry.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ Verified Profiles</li>
                <li>✓ Portfolio Display</li>
                <li>✓ Direct Messaging</li>
                <li>✓ Follow & Connect</li>
              </ul>
              <Link href="/artists" className="text-primary hover:underline font-semibold">
                Meet Artists →
              </Link>
            </div>

            {/* Content Creation */}
            <div className="card hover:border-secondary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Content Creation</h3>
              <p className="text-text-muted mb-4">
                Create and share reels, posts, and stories. Engage with your audience and grow your following.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ Reels & Posts</li>
                <li>✓ Stories Feature</li>
                <li>✓ Live Streaming</li>
                <li>✓ Analytics Dashboard</li>
              </ul>
              <Link href="/home" className="text-secondary hover:underline font-semibold">
                Start Creating →
              </Link>
            </div>

            {/* Advertising Solutions */}
            <div className="card hover:border-primary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📢</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Advertising Solutions</h3>
              <p className="text-text-muted mb-4">
                Promote your brand to millions of engaged users. Targeted advertising solutions for maximum reach.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ Video Ads</li>
                <li>✓ Banner Advertising</li>
                <li>✓ Sponsored Content</li>
                <li>✓ Analytics & Insights</li>
              </ul>
              <Link href="/advertising" className="text-primary hover:underline font-semibold">
                Advertise With Us →
              </Link>
            </div>

            {/* News & Updates */}
            <div className="card hover:border-secondary transition-all duration-300 hover:shadow-glow group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📰</div>
              <h3 className="text-2xl font-heading font-semibold mb-3">Entertainment News</h3>
              <p className="text-text-muted mb-4">
                Stay updated with the latest Bollywood news, industry updates, and exclusive interviews.
              </p>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>✓ Breaking News</li>
                <li>✓ Industry Updates</li>
                <li>✓ Celebrity Interviews</li>
                <li>✓ Event Coverage</li>
              </ul>
              <Link href="/home" className="text-secondary hover:underline font-semibold">
                Read News →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Choose Star India?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              The complete entertainment platform built for creators, artists, and viewers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-3xl">
                🔒
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Secure Platform</h3>
              <p className="text-text-muted text-sm">
                Enterprise-grade security with encrypted payments and data protection
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-secondary to-primary mx-auto mb-4 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Lightning Fast</h3>
              <p className="text-text-muted text-sm">
                Optimized performance for seamless streaming and browsing experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-3xl">
                💎
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Premium Quality</h3>
              <p className="text-text-muted text-sm">
                High-definition content and professional-grade tools for creators
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-secondary to-primary mx-auto mb-4 flex items-center justify-center text-3xl">
                🌐
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">24/7 Support</h3>
              <p className="text-text-muted text-sm">
                Round-the-clock customer support for all your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dark-base">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Sign Up</h3>
              <p className="text-text-muted">
                Create your free account in seconds. Choose your role - Artist, Creator, or Viewer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-dark-base text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Explore</h3>
              <p className="text-text-muted">
                Browse content, discover casting opportunities, or start creating your own content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Engage</h3>
              <p className="text-text-muted">
                Connect with the community, apply for castings, stream content, and grow your presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100K+</div>
              <div className="text-text-muted">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-text-muted">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5K+</div>
              <div className="text-text-muted">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">1K+</div>
              <div className="text-text-muted">Casting Calls</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of creators, artists, and viewers on India's premier entertainment platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Create Free Account
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
