import {
  Atom,
  FlaskConical,
  Pill,
  Microscope,
  GraduationCap,
  Sparkles,
  Brain,
  Cpu,
  Zap,
} from "lucide-react";
import StudentImg from "../assets/images/b-pharma-student2.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Simplified Badge */}
            {/* <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full text-blue-600 font-medium shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence in Pharmaceutical Sciences
              </span>
            </div> */}

            {/* AI Enabled Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md border border-emerald-300 rounded-full text-emerald-700 font-medium shadow-lg animate-pulse">
              <Brain className="w-5 h-5 mr-2 animate-spin" />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
                AI-Powered Education & Research
              </span>
              <Zap className="w-4 h-4 ml-2 text-yellow-500" />
            </div>

            {/* Main Title with Chemical Element Style */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      LUCKNOW
                    </span>
                    <div className="absolute -top-2 -right-2 text-xs bg-blue-500 text-white px-2 py-1 rounded font-bold shadow-md">
                      Li
                    </div>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                      INSTITUTE
                    </span>
                    <div className="absolute -top-2 -right-2 text-xs bg-purple-500 text-white px-2 py-1 rounded font-bold shadow-md">
                      In
                    </div>
                  </span>
                  <br />
                  <span className="text-gray-800">OF</span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      PHARMACY
                    </span>
                    <div className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white px-2 py-1 rounded font-bold shadow-md">
                      Ph
                    </div>
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Where molecular innovation meets pharmaceutical excellence.
                <span className="text-blue-600 font-semibold">
                  {" "}
                  Discover, Create, Heal.
                </span>
              </p>
            </div>

            {/* Simplified CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <a
                  href="https://siu.in8.nopaperforms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Atom className="w-5 h-5 mr-2" />
                  Start Your Journey
                </a>
              </button>

             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                {
                  number: "25+",
                  label: "Years",
                  icon: GraduationCap,
                  color: "blue",
                },
                {
                  number: "5K+",
                  label: "Alumni",
                  icon: Microscope,
                  color: "purple",
                },
                {
                  number: "95%",
                  label: "Placement",
                  icon: FlaskConical,
                  color: "pink",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="relative mb-2">
                    <div className="w-12 h-12 mx-auto bg-white/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Student Image with Lab Elements */}
          <div className="relative">
            {/* Main Container */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl">
              {/* Student Image */}
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src={StudentImg}
                  alt="Pharmacy students working in laboratory"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay with Lab Equipment */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Lab Equipment in corners */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-20 bg-gradient-to-b from-transparent via-blue-200/60 to-blue-300/80 rounded-b-full border-2 border-blue-400 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-400 rounded-t-lg" />
                    {/* Mini Bubbling Animation */}
                    <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce bottom-2 left-1/2 transform -translate-x-1/2" />
                  </div>
                </div>

                {/* Floating Molecules over image */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/80 rounded-full animate-pulse shadow-lg"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}

                {/* Student Achievement Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">
                        Top Performers
                      </div>
                      <div className="text-xs text-gray-600">
                        Academic Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 animate-float shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Atom className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Research Labs</div>
                    <div className="text-xs text-gray-600">
                      Advanced Equipment
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 animate-float shadow-xl"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Pill className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Drug Discovery
                    </div>
                    <div className="text-xs text-gray-600">Innovation Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Enabled Features Div */}
            <div
              className="absolute top-1/2 -left-12 bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-md border-2 border-emerald-300 rounded-2xl p-6 shadow-2xl transform -translate-y-1/2 animate-float min-w-[280px]"
              style={{ animationDelay: "2s" }}
            >
              <div className="space-y-4">
                {/* AI Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center relative">
                    <Brain className="w-6 h-6 text-white animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Zap className="w-2 h-2 text-yellow-800" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-emerald-800 text-lg">
                      AI-Powered
                    </div>
                    <div className="text-sm text-emerald-600">
                      Next-Gen Learning
                    </div>
                  </div>
                </div>

                {/* AI Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-white/60 rounded-lg">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-800">
                      Smart Drug Design
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 p-2 bg-white/60 rounded-lg">
                    <Brain className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-800">
                      ML-Based Research
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 p-2 bg-white/60 rounded-lg">
                    <Atom className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-800">
                      Molecular Modeling
                    </span>
                  </div>
                </div>

                {/* AI Stats */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-emerald-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-700">AI</div>
                    <div className="text-xs text-emerald-600">Integrated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-700">24/7</div>
                    <div className="text-xs text-teal-600">Smart Labs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Student Success Element */}
            <div
              className="absolute top-1/4 -right-8 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-xl animate-float"
              style={{ animationDelay: "3s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Student Success</div>
                  <div className="text-xs text-gray-600">Industry Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
