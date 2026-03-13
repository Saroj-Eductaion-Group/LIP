import React, { useState } from "react";
import { Eye, Target, Heart } from "lucide-react"; // Icons for vision, mission, values
import chairmanImg from "/chairman.jpg"; // Replace with your actual image path
import Layout from "../components/Layout";

const tabs = [
  {
    key: "vision",
    title: "Vision",
    icon: <Eye className="w-6 h-6 inline mr-2 text-blue-400" />,
    content:
      "To be a leading institution in pharmaceutical education, fostering innovation, research, and compassionate healthcare professionals who improve society’s well-being.",
  },
  {
    key: "mission",
    title: "Mission",
    icon: <Target className="w-6 h-6 inline mr-2 text-green-400" />,
    content:
      "To provide quality education, state-of-the-art facilities, and a nurturing environment that empowers students to excel academically, ethically, and professionally.",
  },
  {
    key: "values",
    title: "Values",
    icon: <Heart className="w-6 h-6 inline mr-2 text-red-400" />,
    content:
      "Integrity, Excellence, Compassion, Innovation, and Collaboration form the core of everything we do at Saroj College of Pharmacy.",
  },
];

export default function ChairmanMessage() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 sm:px-12 lg:px-24">
        {/* Container flex for image + message */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 mb-20">
          {/* Image + Name */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-600">
              <img
                src={chairmanImg}
                alt="Chairman of Saroj College of Pharmacy"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-8 text-4xl font-extrabold text-gray-900 text-center lg:text-left">
              Mr. Sunil Singh
            </h2>
            <p className="text-blue-600 font-semibold text-xl mt-2 text-center lg:text-left">
              Chairman, Lucknow Institute of Pharmacy
            </p>
          </div>

          {/* Message */}
          <div className="w-full lg:w-2/3 text-gray-800">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
              Chairman’s Message
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              On behalf of Saroj College of Pharmacy, it gives me immense pleasure
              to welcome you to our institution, where we have been dedicated to
              excellence in pharmaceutical education and research.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our commitment is to empower students with the knowledge, skills,
              and ethical values necessary to become outstanding pharmacy
              professionals who will contribute meaningfully to healthcare and
              society.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We constantly strive to provide a nurturing environment that
              encourages innovation, critical thinking, and compassionate care.
              The world of pharmacy is evolving rapidly, and Saroj College of
              Pharmacy is proud to be at the forefront of this transformation.
            </p>
            <p className="text-lg leading-relaxed">
              I invite you to join us on this exciting journey as we shape the
              future of pharmaceutical education and healthcare.
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-full bg-gray-900 rounded-3xl shadow-lg max-w-7xl mx-auto p-10">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-12 mb-12 border-b border-gray-700">
            {tabs.map(({ key, title, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  flex items-center text-lg font-semibold rounded-md px-6 py-3
                  transition-colors relative
                  ${
                    activeTab === key
                      ? "text-blue-400 border-b-4 border-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.8)]"
                      : "text-gray-400 hover:text-blue-400"
                  }
                `}
              >
                {icon}
                {title}
                {/* Neon border glow on active */}
                {activeTab === key && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 rounded-t-md bg-blue-500 shadow-[0_0_20px_4px_rgba(59,130,246,0.7)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-3xl font-bold mb-6 text-white">
              {tabs.find((tab) => tab.key === activeTab).title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {tabs.find((tab) => tab.key === activeTab).content}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
