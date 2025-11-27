// app/(pages)/products/page.js
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/lib/data';

// Note: Use the public/images directory for these placeholders
const ProductCard = ({ product }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
            {/* Image Placeholder */}
            <div className="text-gray-500 text-sm">Image not loaded.</div>
        </div>
        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900 truncate mb-1" title={product.title}>
                {product.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {product.shortDescription}
            </p>
            <div className="flex justify-between items-center border-t pt-3">
                <span className="text-2xl font-extrabold text-indigo-600">
                    ${product.price.toFixed(2)}
                </span>
                <Link href={`/products/${product.id}`} className="text-sm font-semibold text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
                    Details
                </Link>
            </div>
        </div>
    </div>
);

export default function ProductListPage() {
    const products = MOCK_PRODUCTS;

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        🛒 Product Catalog
                    </h1>
                    <p className="mt-3 text-lg text-gray-600">
                        Explore our best-selling items. Use the search bar to filter.
                    </p>
                </header>
                
                {/* Search Bar & Filter (UI Only) */}
                <div className="flex space-x-4 mb-10 max-w-2xl mx-auto">
                    <input type="text" placeholder="Search products..." 
                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"/>
                    <select className="p-3 border border-gray-300 rounded-lg">
                        <option>All Categories</option>
                        <option>Furniture</option>
                        <option>Electronics</option>
                    </select>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}