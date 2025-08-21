import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/lip-logo.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';


const menuItems = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: "About",
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Chairman Message', path: '/chairman-message' },
      { name: 'Vision & Mission', path: '/vision-mission' },
      // { name: 'Infrastructure', path: '/infrastructure' },
      // { name: 'Faculty', path: '/faculty' },
    ]
  },
  {
    title: 'Admission',
    links: [
      { name: 'Admission Process', path: '/admission-process' },
      { name: 'Fee Structure', path: '/fee-structure' },
      // { name: 'Scholarships', path: '/scholarships' },
      // { name: 'International Students', path: '/international-students' },
    ]
  },
  {
    title: 'Academics',
    links: [
      { name: 'Courses', path: '/courses' },
      { name: 'Syllabus', path: '/syllabus' },
      // { name: 'Academic Calendar', path: '/academic-calendar' },
      // { name: 'Examination', path: '/examination' },
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Placements',
    path: '/placements'
  }
];

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row hidden lg:flex justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start  gap-2 md:gap-2 mb-2 md:mb-0">
            <a href="tel:9513731275" className="flex items-center hover:text-blue-200 transition-colors">
              <FaPhone className="mr-2 text-blue-300" />
              +91 9513731275
            </a>
            
            <a href="mailto:admission.cell@seglko.org" className="flex items-center hover:text-blue-200 transition-colors">
              <FaEnvelope className="mr-2 text-blue-300" />
              admission.cell@seglko.org
            </a>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-300" />
              Lucknow, Uttar Pradesh
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://siu.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.03 }}>
                <img src={logo} alt="Saroj College Logo" className="h-14 md:h-16" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.links ? (
                    <>
                      <motion.button
                        className="flex items-center text-gray-800 hover:text-blue-700 px-4 py-3 font-medium transition-colors relative group"
                      >
                        <span>{item.title}</span>
                        <motion.span
                          animate={{ 
                            rotate: hoveredItem === index ? 180 : 0,
                            color: hoveredItem === index ? "#1d4ed8" : "#1f2937"
                          }}
                          className="ml-1"
                        >
                          <FaChevronDown size={12} />
                        </motion.span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </motion.button>
                      
                      <AnimatePresence>
                        {hoveredItem === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                          >
                            {item.links.map((link, i) => (
                              <Link
                                key={i}
                                to={link.path}
                                className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-4 py-3 font-medium text-gray-800 hover:text-blue-700 relative group transition-colors"
                    >
                      {item.title}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              ))}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="https://siu.in8.nopaperforms.com/"
                  target="_blank"
                  className="ml-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 pb-8 space-y-2">
                  {menuItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0">
                      {item.links ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full text-gray-800 hover:text-blue-700 font-medium py-3 px-4 transition-colors"
                            onClick={() => setHoveredItem(hoveredItem === index ? null : index)}
                          >
                            <span>{item.title}</span>
                            <FaChevronDown className={`transition-transform ${hoveredItem === index ? 'rotate-180' : ''}`} />
                          </button>
                          {hoveredItem === index && (
                            <div className="pl-6 pb-2 space-y-2">
                              {item.links.map((link, i) => (
                                <Link
                                  key={i}
                                  to={link.path}
                                  className="block py-2 text-gray-600 hover:text-blue-700 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="block py-3 px-4 text-gray-800 hover:text-blue-700 font-medium transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Link
                      to="https://siu.in8.nopaperforms.com/"
                      target="_blank"
                      className="block w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-all shadow-md hover:shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;