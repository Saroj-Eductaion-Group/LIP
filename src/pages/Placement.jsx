

import { useState } from "react";
import {
  Calendar,
  Building2,
  IndianRupee,
  GraduationCap,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const placementData = [
  {
    id: 8,
    name: "Shaloni Devi",
    company: "Max Health Care",
    package: "18 LPA",
    role: "B Pharma",
    date: "22/03/2025",
    photo: '/placed-student/shaloni-devi.webp',
  },
  {
    id: 1,
    name: "Harsh Dixit",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: '/placed-student/harsh-dixit.webp',
  },
  {
    id: 2,
    name: "Mansi Sahu",
    company: "Eclat Health",
    package: "3 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-student/mansi-sahu.webp",
  },
  {
    id: 3,
    name: "Surendra Pratap",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-student/surendra-pratap.webp",
  },
  {
    id: 4,
    name: "Pranjali Singh",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-student/pranjali-singh.webp",
  },
  {
    id: 5,
    name: "Ajay Pratap Yadav",
    company: "Max Health Care",
    package: "3 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-student/ajay-pratap-yadav.webp",
  },
  {
    id: 6,
    name: "Piyush Pandey",
    company: "Max Health Care",
    package: "3 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-student/piyush-pandey.webp",
  },
  {
    id: 7,
    name: "Pratit Srivastava",
    company: "Max Health Care",
    package: "4 LPA",
    role: "B Pharma",
    date: "08/04/2025",
    photo: "/placed-student/pratit-srivastava.webp",
  },
];


function PlacementStats() {
  const totalPlacements = placementData.length;
  const uniqueCompanies = [
    ...new Set(placementData.map((student) => student.company)),
  ].length;
  const highestPackage = Math.max(
    ...placementData.map((student) => Number.parseInt(student.package))
  );
  const averagePackage = (
    placementData.reduce(
      (sum, student) => sum + Number.parseInt(student.package),
      0
    ) / totalPlacements
  ).toFixed(1);

  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Placements
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {totalPlacements}
              </p>
            </div>
            <Users className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Partner Companies
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {uniqueCompanies}
              </p>
            </div>
            <Building2 className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Highest Package
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {highestPackage} LPA
              </p>
            </div>
            <Award className="h-12 w-12 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Average Package
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {averagePackage} LPA
              </p>
            </div>
            <TrendingUp className="h-12 w-12 text-orange-500" />
          </div>
        </div>
      </div>
    
  );
}

function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={`${student.photo}?height=200&width=200`}
          alt={student.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {student.package}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.company}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.role}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{student.date}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <IndianRupee className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold text-green-600">
              {student.package}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlacementPage() {
  const [filterCompany, setFilterCompany] = useState("all");

  const companies = [
    "all",
    ...new Set(placementData.map((student) => student.company)),
  ];

  const filteredStudents =
    filterCompany === "all"
      ? placementData
      : placementData.filter((student) => student.company === filterCompany);

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Lucknow Institute of Pharmacy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Placement Success Stories 2025
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Award className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">
                Excellence in Pharmaceutical Education
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Statistics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Placement Highlights
          </h2>
          <PlacementStats />
        </section>

        {/* Filter Section */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Placed Students
            </h2>

            <div className="flex items-center gap-2">
              <label
                htmlFor="company-filter"
                className="text-sm font-medium text-gray-700"
              >
                Filter by Company:
              </label>
              <select
                id="company-filter"
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company === "all" ? "All Companies" : company}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Students Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No students found for the selected company.
              </p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Pharmacy Career?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join Lucknow Institute of Pharmacy and become part of our success
            story
          </p>
          <a 
          href="https://siu.in8.nopaperforms.com/"
          target="_blank"
          
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Apply Now
          </a>
        
        </section>
      </main>

      {/* Footer */}
      
    </div>
    </Layout>
  );
}

export default PlacementPage;
