"use client"
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router=useRouter()
  return (
    <nav className="border-b border-[#4a4a4a52] bg-[#04000f] py-2 shadow-sm">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <div onClick={()=>router.push('/')} className="text-xl font-medium tracking-tight text-white">
          LawWise
        </div>

       <ul className="hidden space-x-4 text-sm font-medium text-white md:flex md:text-base">
  {['Home', 'About'].map((item) => {
    const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
    return (
      <li
        key={item}
        onClick={() => router.push(path)}
        className="cursor-pointer rounded-full px-3 py-1 transition-colors hover:bg-[#1f1b2e] hover:text-slate-300"
      >
        {item}
      </li>
    );
  })}
</ul>


        {/* Login Button */}
        <Button
          variant="outline"
          className="bg-white px-4 py-1 text-sm font-medium text-slate-900 transition hover:bg-gray-200"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
