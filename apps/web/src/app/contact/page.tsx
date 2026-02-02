import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-text-muted">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-muted mb-1">Email</p>
                  <p className="font-semibold">contact@starindia.com</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Phone</p>
                  <p className="font-semibold">+91 123 456 7890</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Address</p>
                  <p className="font-semibold">
                    Star India Entertainment<br />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-heading font-semibold mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input w-full"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="input w-full h-32 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

