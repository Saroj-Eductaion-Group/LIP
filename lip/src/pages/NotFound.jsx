import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scienceIcons, setScienceIcons] = useState([]);

  // Create floating science icons on mount
  useEffect(() => {
    const icons = ['🧪', '🔬', '💊', '🧫', '🧬', '🦠', '🧴', '🧼'];
    const newIcons = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      rotation: Math.random() * 60 - 30,
      speed: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 2,
      icon: icons[i % icons.length]
    }));
    setScienceIcons(newIcons);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Layout>
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating science icons */}
      {scienceIcons.map((item) => (
        <div
          key={item.id}
          className="absolute text-4xl opacity-20 hover:opacity-100 transition-all duration-1000 hover:text-yellow-300"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `rotate(${item.rotation}deg)`,
            animation: `float ${item.speed}s ease-in-out infinite alternate ${item.delay}s`,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Cursor follower */}
      <div
        className={`absolute w-64 h-64 rounded-full bg-blue-600 blur-xl opacity-10 pointer-events-none transition-transform duration-300 ${
          isHovered ? "scale-150" : "scale-100"
        }`}
        style={{
          left: `${cursorPosition.x - 128}px`,
          top: `${cursorPosition.y - 128}px`,
        }}
      />

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="text-center max-w-2xl">
          <div className="relative inline-block">
            <h1 className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              404
            </h1>
            <div className="absolute -bottom-4 right-8 text-6xl">🧪</div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-300">Compound Not Found</span> in Our Database
          </h2>
          
          <p className="text-xl mb-8 text-blue-200">
            The page you're looking for seems to be missing from our research archives. 
            Perhaps it's still in clinical trials or needs peer review.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Link
              to="/"
              className="action-button bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mr-2">🏠</span> Return to Home
            </Link>
            
            <Link
              to="/contact"
              className="action-button bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mr-2">📞</span> Contact Our Faculty
            </Link>
            
            <Link
              to="/about"
              className="action-button bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mr-2">🏫</span> About Our College
            </Link>
            
            <a
              href="https://siu.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mr-2">📝</span> Admission Portal
            </a>
          </div>
          
          
        </div>
        
        {/* Interactive pharma departments section */}
        
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(${Math.random() * 60 - 30}deg);
          }
          100% {
            transform: translateY(-20px) rotate(${Math.random() * 60 - 30}deg);
          }
        }
      `}</style>
    </div>
    </Layout>
  );
}