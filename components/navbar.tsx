import React from 'react';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className="border-b border-[#4a4a4a52] bg-transparent py-2 shadow-sm">
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-medium tracking-tight text-white">
          LawWise
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 text-sm md:text-base font-medium text-white">
          {['Home', 'About'].map((item) => (
            <li
              key={item}
              className="px-3 py-1 rounded-full cursor-pointer hover:bg-[#1f1b2e] hover:text-slate-300 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Button
          variant="outline"
          className="bg-white text-slate-900 font-medium hover:bg-gray-200 transition px-4 py-1 text-sm"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
