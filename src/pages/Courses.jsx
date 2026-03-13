import React from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const courses = [
  {
    id: "bpharma",
    title: "Bachelor of Pharmacy (B.Pharm)",
    duration: "4 Years",
    description:
      "An undergraduate program focusing on pharmaceutical sciences, preparing students for careers in drug development, clinical pharmacy, and pharmaceutical industry.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    highlights: [
      "AICTE Approved",
      "Industry-Relevant Curriculum",
      "Laboratory and Research Facilities",
    ],
  },
  {
    id: "mpharma",
    title: "Master of Pharmacy (M.Pharm)",
    duration: "2 Years",
    description:
      "Advanced postgraduate program offering specializations in areas like Pharmacology, Pharmaceutics, and Pharmaceutical Chemistry, with emphasis on research and development.",
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    highlights: [
      "Research-Oriented",
      "Experienced Faculty",
      "Collaborative Projects & Internships",
    ],
  },
  {
    id: "dpharma",
    title: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years",
    description:
      "A diploma program that prepares students for foundational knowledge in pharmacy practice, suitable for roles in community and hospital pharmacies.",
    icon: <Award className="w-8 h-8 text-purple-600" />,
    highlights: [
      "Quick Path to Pharmacy Practice",
      "Practical Training",
      "Recognized by Pharmacy Council",
    ],
  },
];

export default function CoursesPage() {
  return (
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6 md:px-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Page Title */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Pharmacy Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the courses designed to shape your career in pharmaceutical
            sciences and healthcare.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
          {courses.map(
            ({ id, title, duration, description, icon, highlights }) => (
              <article
                key={id}
                className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{duration}</p>
                  </div>
                </div>

                <p className="text-gray-700 flex-grow leading-relaxed">
                  {description}
                </p>

                <ul className="mt-6 mb-8 space-y-2">
                  {highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 space-x-2"
                    >
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/courses/${id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  aria-label={`Learn more about ${title}`}
                ></Link>
              </article>
            )
          )}
        </div>

        {/* Stats & Call to Action */}
        <div className="max-w-5xl mx-auto mt-20 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-3 gap-12 mb-12 text-white">
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-blue-500 drop-shadow-lg">
                500+
              </div>
              <div className="text-lg font-medium text-blue-300 tracking-wide">
                Students Enrolled
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-green-500 drop-shadow-lg">
                50+
              </div>
              <div className="text-lg font-medium text-green-300 tracking-wide">
                Expert Faculty
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-purple-500 drop-shadow-lg">
                25+
              </div>
              <div className="text-lg font-medium text-purple-300 tracking-wide">
                Years of Excellence
              </div>
            </div>
          </div>

          <Link
            to="https://siu.in8.nopaperforms.com/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 hover:from-purple-700 hover:to-blue-600 text-white font-semibold text-lg px-14 py-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
