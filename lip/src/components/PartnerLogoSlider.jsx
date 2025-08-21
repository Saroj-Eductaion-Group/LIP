import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const companyLogos = [
  { src: '/company-logo/1.png', name: 'TechCorp' },
  { src: '/company-logo/2.png', name: 'InnoPharma' },
  { src: '/company-logo/3.png', name: 'MediLabs' },
  { src: '/company-logo/4.png', name: 'BioGen' },
  
];

export default function InfiniteLogoSlider() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Infinite rotation animation
  useEffect(() => {
    if (inView) {
      controls.start({
        x: ['0%', '-100%'],
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }
      });
    }
  }, [controls, inView]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-purple-50/50 py-16">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-blue-50/80"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Our Hiring Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to launch exceptional careers
          </p>
        </div>

        {/* Infinite rotating logo track */}
        <div className="relative h-32 overflow-hidden">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* First rotating track */}
          <motion.div 
            className="absolute flex"
            animate={controls}
          >
            {[...companyLogos, ...companyLogos, ...companyLogos].map((company, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 px-4 md:px-6">
                <div className="h-24 w-40 flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <img
                    src={company.src}
                    alt={company.name}
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs text-gray-500">{company.name}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second rotating track (delayed) */}
          <motion.div 
            className="absolute flex top-16"
            animate={{
              x: ['100%', '-100%'],
              transition: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
                delay: 15
              }
            }}
          >
            {[...companyLogos.reverse(), ...companyLogos.reverse(), ...companyLogos.reverse()].map((company, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 px-4 md:px-6">
                <div className="h-24 w-40 flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <img
                    src={company.src}
                    alt={company.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs text-gray-500">{company.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium">
            <span className="text-2xl md:text-3xl font-bold">500+</span> successful placements
          </p>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-blue-50/80"
          />
        </svg>
      </div>
    </div>
  );
}