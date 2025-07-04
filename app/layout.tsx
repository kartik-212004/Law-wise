import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import PatternBackground from '@/components/PatternBackground';
import './globals.css';
import AppFooter from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <PatternBackground>
            <div className="flex-1 overflow-x-hidden py-8">{children}</div>
          </PatternBackground>
          <AppFooter/>
        </div>
      </body>
    </html>
  );
}
