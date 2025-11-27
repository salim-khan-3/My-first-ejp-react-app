// components/common/Navbar.js
'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

// Dropdown component (embedded)
function DropdownMenu({ session, signOut }) {
    const [isOpen, setIsOpen] = useState(false);
    const displayName = session.user.name || session.user.email;
  
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center items-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 text-sm font-medium transition"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          {displayName.split(' ')[0]}
        </button>
  
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
            role="menu"
          >
            <div className="py-1">
              <div className="px-4 py-2 text-sm text-gray-700 border-b font-semibold">
                {displayName}
              </div>
              <Link href="/add-product" onClick={() => setIsOpen(false)} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                Add Product
              </Link>
              <Link href="/manage-products" onClick={() => setIsOpen(false)} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                Manage Products
              </Link>
              <button
                onClick={() => { signOut(); setIsOpen(false); }}
                className="text-red-600 w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 border-t mt-1"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Features', href: '/#features' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center text-2xl font-bold text-indigo-600">
            📦 ProductApp
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {routes.map((route) => (
              <Link key={route.name} href={route.href} 
                className="text-gray-600 hover:text-indigo-600 transition font-medium"
              >
                {route.name}
              </Link>
            ))}

            {status === 'loading' ? (
              <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            ) : session ? (
              <DropdownMenu session={session} signOut={signOut} />
            ) : (
              <Link href="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Login / Register
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button (omitted icon implementation for brevity) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-indigo-600">Menu</button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Content (omitted for brevity) */}
    </nav>
  );
}