import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Star India Entertainment - Admin Panel',
  description: 'Admin Dashboard for Star India Entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

