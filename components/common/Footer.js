// components/common/Footer.js
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Simplified structure */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ProductApp. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-1 space-x-2">
            <Link href="/add-product" className="hover:text-indigo-400">Add Product</Link> | 
            <Link href="/manage-products" className="hover:text-indigo-400">Manage</Link> |
            <Link href="/" className="hover:text-indigo-400">Home</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}