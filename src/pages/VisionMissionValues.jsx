import { GraduationCap, Target, Heart, Users, Award, BookOpen } from "lucide-react"
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

export default function VisionMissionValues() {
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <GraduationCap className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Lucknow Institute of Pharmacy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering future pharmacists through excellence in education, research, and healthcare innovation
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-16 w-16 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                To be a globally recognized center of excellence in pharmaceutical education, research, and innovation,
                producing competent and compassionate pharmacists who contribute significantly to healthcare advancement
                and community well-being while upholding the highest standards of professional ethics and social
                responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="h-16 w-16 text-green-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Excellence in Education:</strong> Provide comprehensive pharmaceutical education that
                    combines theoretical knowledge with practical skills, preparing students for successful careers in
                    pharmacy practice, research, and industry.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Research & Innovation:</strong> Foster a culture of scientific inquiry and innovation
                    through cutting-edge research in pharmaceutical sciences, drug discovery, and healthcare
                    technologies.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Community Service:</strong> Engage with the community through health awareness programs,
                    pharmaceutical care services, and initiatives that improve public health outcomes.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Professional Development:</strong> Cultivate ethical, responsible, and lifelong learning
                    professionals who adapt to evolving healthcare needs and technological advancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-12">
              <Heart className="h-16 w-16 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Excellence */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  Striving for the highest standards in education, research, and professional practice while
                  continuously improving our methods and outcomes.
                </p>
              </div>

              {/* Integrity */}
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-700">
                  Maintaining honesty, transparency, and ethical conduct in all our academic, research, and professional
                  activities.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Embracing creativity and forward-thinking approaches to solve healthcare challenges and advance
                  pharmaceutical sciences.
                </p>
              </div>

              {/* Compassion */}
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
                <p className="text-gray-700">
                  Demonstrating empathy and care for patients, students, and community members while promoting health
                  and well-being.
                </p>
              </div>

              {/* Collaboration */}
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  Working together with students, faculty, healthcare professionals, and communities to achieve common
                  goals and shared success.
                </p>
              </div>

              {/* Lifelong Learning */}
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lifelong Learning</h3>
                <p className="text-gray-700">
                  Promoting continuous education, professional development, and adaptation to evolving healthcare
                  practices and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of a legacy that shapes the future of pharmacy and healthcare. Together, we can make a difference
              in the lives of countless individuals and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More About Our Programs
              </Link>

              
              <Link to="https://siu.in8.nopaperforms.com/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Admissions
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Saroj College of Pharmacy. All rights reserved. | Committed to Excellence in Pharmaceutical Education
          </p>
        </div>
      </footer>
    </div>
    </Layout>
  )
}
