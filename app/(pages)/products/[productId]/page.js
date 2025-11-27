// app/(pages)/products/[productId]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data';

// App Router uses 'params' object to get the dynamic segment
export default function ProductDetailPage({ params }) {
    const { productId } = params;
    const product = getProductById(productId);

    if (!product) {
        notFound();
    }

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link href="/products" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition mb-6 font-medium">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Product List
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-xl shadow-lg">
                    {/* Image / Banner */}
                    <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <p className="text-gray-500">Large Image Placeholder</p>
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {product.title}
                        </h1>
                        
                        <div className="flex items-center space-x-6 mb-6">
                            <span className="text-5xl font-extrabold text-indigo-600">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                                product.priority === 'High' ? 'bg-red-100 text-red-800' : 
                                product.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-green-100 text-green-800'
                            }`}>
                                Priority: {product.priority}
                            </span>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
                            Description
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {product.fullDescription}
                        </p>

                        <button className="btn-primary w-full mt-8">
                            Add to Cart (UI Only)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}