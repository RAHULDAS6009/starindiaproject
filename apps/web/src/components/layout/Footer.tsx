import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-base border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              Star India Entertainment
            </h3>
            <p className="text-text-muted text-sm">
              Premium Bollywood OTT Platform
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/casting" className="hover:text-primary transition-colors">
                  Casting
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-primary transition-colors">
                  Artists
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/ott" className="hover:text-primary transition-colors">
                  OTT
                </Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-primary transition-colors">
                  Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Star India Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

