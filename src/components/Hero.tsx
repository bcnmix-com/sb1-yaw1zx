export default function Hero() {
  return (
    <div className="relative bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-12">
          <h1 className="text-5xl font-bold mb-6">Learn from the best<br />creative experts</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Join our global creative community and learn from industry professionals through online courses in illustration, design, photography, and more.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore courses
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-50"></div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }}
      ></div>
    </div>
  );
}