'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/users', label: 'User Management', icon: '👥' },
  { href: '/content', label: 'Content Moderation', icon: '📝' },
  { href: '/casting', label: 'Casting & Projects', icon: '🎭' },
  { href: '/ott', label: 'OTT Management', icon: '🎬' },
  { href: '/ads', label: 'Ads & Promotions', icon: '📢' },
  { href: '/payments', label: 'Payments & Wallet', icon: '💰' },
  { href: '/reports', label: 'Reports & Analytics', icon: '📈' },
  { href: '/audit', label: 'Audit Logs', icon: '📋' },
  { href: '/settings', label: 'Settings & Security', icon: '⚙️' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-dark-base border-r border-gray-800 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-xl font-heading font-bold text-primary">
          Star India Admin
        </h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

