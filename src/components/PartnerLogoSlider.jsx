import Marquee from 'react-fast-marquee';

const companyLogos = [
  'company-logo/1.png',
  'company-logo/2.png',
  'company-logo/3.png',
  'company-logo/4.png',
  'company-logo/1.png',
  'company-logo/2.png',
  'company-logo/3.png',
  'company-logo/4.png',
];

export default function PartnerLogoSlider() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Top flow divider */}
      <div className="overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
            fill="#e0e7ff" // light blue purple matching bg gradient
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Hiring Partners</h2>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center mx-6">
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom flow divider */}
      <div className="overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
            fill="#e0e7ff"
          />
        </svg>
      </div>
    </div>
  );
}
