import {
  Atom,
  FlaskConical,
  Pill,
  Microscope,
  GraduationCap,
  BrainCircuit,
  Brain,
  Cpu,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import StudentImg from "../assets/images/b-pharma-student2.jpeg";

const ModernHeroSection = () => {
  return (
    <section className="relative min-h-80vh w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* AI Badge with micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-lg border border-emerald-400/30 rounded-full shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mr-3"
              >
                <BrainCircuit className="w-5 h-5 text-emerald-500" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI-Enhanced Pharmaceutical Education
              </span>
              <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Title with Chemical Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LUCKNOW
                </span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  INSTITUTE
                </span>
                <span className="block text-gray-800">OF</span>
                <span className="block bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  PHARMACY
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Where{" "}
                <span className="font-semibold text-blue-600">
                  cutting-edge research
                </span>{" "}
                meets
                <span className="font-semibold text-purple-600">
                  {" "}
                  pharmaceutical innovation
                </span>{" "}
                in an
                <span className="font-semibold text-emerald-600">
                  {" "}
                  AI-powered learning ecosystem
                </span>
                .
              </p>
            </motion.div>

            {/* CTA Buttons with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://siu.in8.nopaperforms.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <Atom className="w-5 h-5" />
                <span>Start Your Journey</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="/courses"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border-2 border-blue-600 rounded-xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3"
              >
                <FlaskConical className="w-5 h-5" />
                <span>Explore Programs</span>
              </motion.a>
            </motion.div>

            {/* Stats with Animated Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                {
                  number: "25+",
                  label: "Years Legacy",
                  icon: GraduationCap,
                  color: "text-blue-600",
                },
                {
                  number: "5K+",
                  label: "Successful Alumni",
                  icon: Microscope,
                  color: "text-purple-600",
                },
                {
                  number: "95%",
                  label: "Placement Rate",
                  icon: Pill,
                  color: "text-pink-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="relative lg:mt-0 mt-8">
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-lg lg:shadow-xl overflow-hidden"
            >
              {/* Student Image with Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full h-80% bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl overflow-hidden">
                <img
                  src={StudentImg}
                  alt="Pharmacy students working in laboratory"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Lab Equipment (Visible on all screens) */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 lg:top-6 lg:right-6 w-12 h-16 lg:w-16 lg:h-20 bg-gradient-to-b from-transparent via-blue-200/60 to-blue-300/80 rounded-b-full border-2 border-blue-400/80 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-1.5 lg:w-4 lg:h-2 bg-gray-400 rounded-t-lg" />
                  <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce bottom-2 left-1/2 transform -translate-x-1/2" />
                </motion.div>

                {/* Floating Molecules (Reduced count on mobile) */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/90 rounded-full shadow-sm lg:shadow-md"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Achievement Badge (Responsive sizing) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/95 backdrop-blur-sm lg:backdrop-blur-md border border-gray-200/50 rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-md lg:shadow-lg"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-md lg:rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm font-bold text-gray-900">
                        Top Ranked
                      </div>
                      <div className="text-[10px] lg:text-xs text-gray-600">
                        Academic Excellence
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
