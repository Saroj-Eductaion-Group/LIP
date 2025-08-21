import React from "react";
import { Link } from "react-router-dom";


export const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Start Your Journey in Pharmacy?
      </h2>
      <p className="mb-8">
        Join Saroj College of Pharmacy and be a part of the future of healthcare.
      </p>
      <a
      href="https://siu.in8.nopaperforms.com/"
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        className="bg-gradient-to-r from-gray-900 hover:cursor-pointer to-gray-800 outline-1 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-colors"
      >
        Apply Now
      </a>

      
    </div>
  </section>
);
