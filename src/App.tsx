import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import CategorySection from './components/CategorySection';

const featuredCourses = [
  {
    title: "Digital Illustration: Creativity, Style and Efficiency",
    instructor: "Sarah Anderson",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80",
    category: "Illustration",
    students: 15420,
    price: 39.99
  },
  {
    title: "Brand Design: From Concept to Identity",
    instructor: "Michael Chen",
    image: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&q=80",
    category: "Design",
    students: 12350,
    price: 44.99
  },
  {
    title: "Professional Photography Masterclass",
    instructor: "Emma Roberts",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
    category: "Photography",
    students: 9840,
    price: 49.99
  },
  {
    title: "3D Character Animation Fundamentals",
    instructor: "David Miller",
    image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80",
    category: "3D & Animation",
    students: 7260,
    price: 54.99
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <button className="text-blue-600 hover:text-blue-700">View all courses</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>

        <CategorySection />
        
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Learning Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of creators and professionals who are mastering new skills and advancing their careers.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Forum</a></li>
                <li><a href="#" className="hover:text-white">Creators</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Creative Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;