'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-base border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-heading font-bold text-primary hover:opacity-80 transition-opacity">
            Star India
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/home" className="text-text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/casting" className="text-text-white hover:text-primary transition-colors">
              Casting
            </Link>
            <Link href="/artists" className="text-text-white hover:text-primary transition-colors">
              Artists
            </Link>
            <Link href="/ott" className="text-text-white hover:text-primary transition-colors">
              OTT
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="btn-outline text-sm px-4 py-2">
              Login
            </Link>
            <button
              className="md:hidden text-text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <Link href="/home" className="block py-2 text-text-white hover:text-primary">
              Home
            </Link>
            <Link href="/casting" className="block py-2 text-text-white hover:text-primary">
              Casting
            </Link>
            <Link href="/artists" className="block py-2 text-text-white hover:text-primary">
              Artists
            </Link>
            <Link href="/ott" className="block py-2 text-text-white hover:text-primary">
              OTT
            </Link>
            <Link href="/advertising" className="block py-2 text-text-white hover:text-primary">
              Advertising
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

