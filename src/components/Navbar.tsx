import { useState } from 'react';
import { Search, Menu, User, ShoppingCart, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-black text-white px-3 py-1">D.</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/courses" className="text-gray-600 hover:text-black transition-colors">Courses</a>
              <a href="/creative" className="text-gray-600 hover:text-black transition-colors">Creative</a>
              <a href="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</a>
              <a href="/jobs" className="text-gray-600 hover:text-black transition-colors">Jobs</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses"
                  className="bg-transparent border-none focus:outline-none ml-2 w-48"
                />
              </div>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search"
              >
                <Search className="h-6 w-6 text-gray-600" />
              </button>
              
              <button 
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-label="User account"
              >
                <User className="h-6 w-6 text-gray-600" />
              </button>
              
              <button 
                className="p-2 rounded-md hover:bg-gray-100 relative focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden border-t border-gray-200 p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses"
                className="bg-transparent border-none focus:outline-none ml-2 w-full"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div className={`transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-16 left-0 h-full w-64 bg-white shadow-lg md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={closeMenus}
            >
              Courses
            </a>
            <a
              href="/creative"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={closeMenus}
            >
              Creative
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={closeMenus}
            >
              Projects
            </a>
            <a
              href="/jobs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
              onClick={closeMenus}
            >
              Jobs
            </a>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {(isMenuOpen || isSearchOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenus}
        />
      )}
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}