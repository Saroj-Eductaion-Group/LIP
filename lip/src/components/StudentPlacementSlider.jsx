import { motion } from "framer-motion";
import { FaTrophy, FaUniversity, FaBriefcase, FaRupeeSign, FaFlask, FaHospital } from "react-icons/fa";

const placements = [
  {
    id: 8,
    name: "Shaloni Devi",
    company: "Max Health Care",
    package: "18 LPA",
    role: "B Pharma",
    date: "22/03/2025",
    photo: "/placed-student/shaloni-devi.webp",
  },
  {
  id: 1,
    name: "Harsh Dixit",
    company: "Eclat Health",
    package: "4 LPA",
    role: "B Pharma",
    date: "29/04/2025",
    photo: "/placed-student/harsh-dixit.webp",
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

const StatsCard = ({ value, label, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    <div className="text-4xl text-blue-600 mb-2 flex justify-center">{icon}</div>
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
);

export default function StudentPlacementSlider() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Students Placed in <span className="text-blue-600">Pharma & Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our successful alumni working at leading pharmaceutical companies and hospitals
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <StatsCard value="300+" label="Students Placed" icon={<FaUniversity />} />
          <StatsCard value="25+" label="Top Organizations" icon={<FaBriefcase />} />
          <StatsCard value="18 LPA" label="Highest Package" icon={<FaTrophy />} />
          <StatsCard value="8.5 LPA" label="Average Package" icon={<FaRupeeSign />} />
        </div>

        {/* Student Placements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{student.name}</h3>
                  <p className="text-blue-300">{student.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">{student.company.includes('Hospital') ? 'Hospital' : 'Company'}</span>
                  <span className="font-semibold">{student.company}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Package</span>
                  <span className="text-green-600 font-bold text-lg">
                    ₹{student.package}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}