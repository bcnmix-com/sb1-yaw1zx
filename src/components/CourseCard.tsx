interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  category: string;
  students: number;
  price: number;
}

export default function CourseCard({ title, instructor, image, category, students, price }: CourseCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-white text-sm font-medium">{category}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">{title}</h3>
      <p className="text-gray-600 mb-2">By {instructor}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">{students.toLocaleString()} students</span>
        <span className="font-semibold">${price}</span>
      </div>
    </div>
  );
}