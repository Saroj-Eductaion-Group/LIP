import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a premier institution dedicated to excellence in education and committed to fostering innovation, research, and holistic development in students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/admission-process" className="hover:text-white">Admissions</Link></li>
            <li><Link to="/fee-structure" className="hover:text-white">Fee Structure</Link></li>
            <li><Link to="/scholarships" className="hover:text-white">Scholarships</Link></li>
            <li><Link to="/academic-calendar" className="hover:text-white">Academic Calendar</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-blue-500" />
              <span>Chand Sarai, Near Gosaiganj, Sultanpur Road , 20th KM Stone, Lucknow, Uttar Pradesh, India, 226001</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-blue-500" />
              <a href="tel:9513731275" className="hover:text-white">+91 9513731275</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-500" />
              <a href="mailto:admission.cell@seglko.org" className="hover:text-white">admission.cell@seglko.org</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-gray-400">&copy; {new Date().getFullYear()} Lucknow Institute Of Pharmacy. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
