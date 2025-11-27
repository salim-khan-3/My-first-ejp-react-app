// app/(pages)/manage-products/page.js
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { MOCK_PRODUCTS } from '@/lib/data';
import Link from 'next/link';

const ProductRow = ({ product }) => (
    <tr className="hover:bg-gray-50 transition duration-150">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.title}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{product.shortDescription.substring(0, 40)}...</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">${product.price.toFixed(2)}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                product.priority === 'High' ? 'bg-red-100 text-red-800' : 
                product.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-green-100 text-green-800'
            }`}>
                {product.priority}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link href={`/products/${product.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                View
            </Link>
            <button className="text-red-600 hover:text-red-900" onClick={() => alert(`Deleting ${product.title}... (UI Only)`)}>
                Delete
            </button>
        </td>
    </tr>
);

export default function ManageProductsPage() {
    const products = MOCK_PRODUCTS;
    return (
        <ProtectedRoute>
            <div className="py-10 bg-gray-50 min-h-[80vh]">
                <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        🔒 Manage Inventory ({products.length})
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        List of all products with options to view details or remove them.
                    </p>
                </header>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Description</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Price</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <ProductRow key={product.id} product={product} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}