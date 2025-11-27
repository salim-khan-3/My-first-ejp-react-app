// app/(pages)/add-product/page.js
import ProtectedRoute from "@/components/layout/ProtectedRoute";

const AddProductForm = () => {
    // Client-side implementation (useEffect/useState for real forms)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Product added successfully! (Dummy Confirmation)');
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">Product Details</h3>
                
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" id="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div>
                    <label htmlFor="short-desc" className="block text-sm font-medium text-gray-700">Short Description (max 50 chars)</label>
                    <input type="text" id="short-desc" required maxLength="50" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div>
                    <label htmlFor="full-desc" className="block text-sm font-medium text-gray-700">Full Description</label>
                    <textarea id="full-desc" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (USD)</label>
                        <input type="number" id="price" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority Level</label>
                        <select id="priority" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
                    <input type="url" id="image-url" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div className="pt-5">
                    <button type="submit" className="btn-primary">
                        Submit Product
                    </button>
                    <p className="mt-2 text-sm text-gray-500">
                        *This page is secure. (Mock Login: **user@example.com** / **password**)*
                    </p>
                </div>
            </form>
        </div>
    );
};

export default function AddProductPage() {
    return (
        <ProtectedRoute>
            <div className="py-10 bg-gray-50 min-h-[80vh]">
                <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        🔒 Add New Product
                    </h1>
                </header>
                <AddProductForm />
            </div>
        </ProtectedRoute>
    );
}