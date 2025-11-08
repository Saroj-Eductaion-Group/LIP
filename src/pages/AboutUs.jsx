import React from "react";
import { FlaskConical, GraduationCap, HeartPulse, Library } from "lucide-react";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-4 sm:px-8">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Lucknow Institute of Pharmacy
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Pioneering pharmaceutical education since 2005 with innovation, research excellence, and industry-aligned training.
          </p>
        </div>

        {/* Features with Icons */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            { icon: <GraduationCap className="w-10 h-10" />, title: "500+ Graduates", desc: "Successful alumni network" },
            { icon: <FlaskConical className="w-10 h-10" />, title: "15+ Labs", desc: "State-of-the-art facilities" },
            { icon: <HeartPulse className="w-10 h-10" />, title: "100% Placement", desc: "Industry partnerships" },
            { icon: <Library className="w-10 h-10" />, title: "10,000+ Books", desc: "Comprehensive library" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <p className="mb-6 text-indigo-100">
                At Lucknow Institute of Pharmacy, we believe in merging theoretical knowledge with practical application to create pharmacy professionals who can meet global healthcare challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-focused curriculum</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Research-driven approach</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ethical practice emphasis</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">Learn from PhD holders and industry veterans with decades of experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Modern Infrastructure</h3>
                  <p className="text-gray-600">Air-conditioned labs, advanced instrumentation, and digital classrooms.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Industry Connect</h3>
                  <p className="text-gray-600">Regular workshops, guest lectures, and placement opportunities with leading pharma companies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </section>
    </Layout>
  );
}