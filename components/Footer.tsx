'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export default function AppFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'w-full border-t bg-[#04000F] border-white/10 text-sm text-white/70',
        className
      )}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:gap-0">
        <p>&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="hover:text-white/90 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white/90 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
