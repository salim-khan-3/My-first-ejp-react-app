// lib/data.js

export const MOCK_PRODUCTS = [
  { id: 'p1', title: 'Modern Coffee Table', shortDescription: 'Sleek design, perfect for small spaces.', fullDescription: 'Crafted from sustainable oak with a matte black finish. Features a hidden compartment for remotes and magazines. Dimensions: 80cm x 40cm x 45cm.', price: 199.99, priority: 'High', image: '/images/mock-product-1.jpg' },
  { id: 'p2', title: 'Ergonomic Office Chair', shortDescription: 'Ultimate comfort for long working hours.', fullDescription: 'Fully adjustable lumbar support, breathable mesh back, and 3D armrests. Available in charcoal and grey.', price: 349.50, priority: 'Medium', image: '/images/mock-product-2.jpg' },
  { id: 'p3', title: 'Noise-Cancelling Headphones', shortDescription: 'Immersive sound quality, all-day battery.', fullDescription: 'Industry-leading noise cancellation technology with up to 30 hours of playback. Lightweight and foldable design.', price: 279.00, priority: 'High', image: '/images/mock-product-3.jpg' },
  { id: 'p4', title: 'Smart Home Hub', shortDescription: 'Control all your devices in one place.', fullDescription: 'Compatible with all major smart home protocols. Voice control enabled. Simple setup via mobile app.', price: 89.99, priority: 'Low', image: '/images/mock-product-4.jpg' },
  { id: 'p5', title: 'Vintage Leather Wallet', shortDescription: 'Hand-stitched genuine Italian leather.', fullDescription: 'Slim bifold design with RFID blocking technology. Holds 8 cards and has a divided cash pocket.', price: 55.00, priority: 'Medium', image: '/images/mock-product-5.jpg' },
  { id: 'p6', title: 'Portable Blender', shortDescription: 'Fresh smoothies anywhere, anytime.', fullDescription: 'Powerful motor in a compact, USB-rechargeable design. Perfect for travel or gym.', price: 45.95, priority: 'High', image: '/images/mock-product-6.jpg' },
];

export function getProductById(id) {
    return MOCK_PRODUCTS.find(p => p.id === id);
}