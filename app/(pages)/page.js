// app/(pages)/page.js
// IMPORTANT: This file must be named page.js and be the default export.
import Link from 'next/link';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="pt-8">
      {/* 1. Hero Section */}
      <section className="text-center py-20 md:py-32 bg-indigo-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Your Next Favorite Item
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A curated selection of high-quality products. Simple management powered by Next.js and NextAuth.
          </p>
          <Link href="/products" className="btn-primary text-lg">
            Start Shopping Now →
          </Link>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ProductApp Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.238A6 6 0 0012 4c-3.238 0-6 2.762-6 6a6 6 0 009.618 4.762M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Quality Guaranteed"
              description="Every item is hand-vetted for durability and premium materials."
            />
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 14h6M9 17h6M19 9l-2 2-2-2M7 9l2 2 2-2" /></svg>}
              title="Global Shipping"
              description="Fast and reliable delivery to over 100 countries worldwide."
            />
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0l2 2 4-4m2-5h5a2 2 0 012 2v6a2 2 0 01-2 2h-5m-9 2h4m-2 0V9" /></svg>}
              title="Secure Payments"
              description="All transactions are encrypted and processed securely. Your data is safe."
            />
          </div>
        </div>
      </section>
      
      {/* 3. CTA Banner Section (Dummy) */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Need Help or Support?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Our support team is available 24/7 to assist you.
          </p>
          <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 transition shadow-xl">
            Contact Us
          </button>
        </div>
      </section>

      {/* 4. Testimonials (Dummy) */}
      <section id="contact" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                <p className="italic text-gray-600 mb-4">"The platform is so fast and the UI is incredibly intuitive. Great work!"</p>
                <cite className="font-semibold text-gray-800">- Sarah K.</cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                <p className="italic text-gray-600 mb-4">"The protected pages feature works flawlessly. Highly secure."</p>
                <cite className="font-semibold text-gray-800">- Ben T.</cite>
            </blockquote>
        </div>
      </section>
    </div>
  );
}