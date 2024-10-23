import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Illustration', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80' },
  { name: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80' },
  { name: 'Photography', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80' },
  { name: '3D & Animation', image: 'https://images.unsplash.com/photo-1616499615673-b0e0b0fc0009?auto=format&fit=crop&q=80' },
];

export default function CategorySection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}