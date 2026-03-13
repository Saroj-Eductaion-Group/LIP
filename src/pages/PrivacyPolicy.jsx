import { useState } from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState([0]);

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const sections = [
    {
      title: "Information Collection",
      content: "Saroj College of Pharmacy collects personal information from students, faculty, and visitors through various forms, including admission forms, registration forms, and website interactions. This may include name, contact details, academic records, and other relevant information necessary for educational purposes."
    },
    {
      title: "Use of Information",
      content: "The collected information is used for academic administration, communication, institutional research, and compliance with regulatory requirements. We may also use anonymized data for statistical analysis and improving our services."
    },
    {
      title: "Data Protection",
      content: "We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. All sensitive data is stored securely with restricted access to authorized personnel only."
    },
    {
      title: "Third-Party Disclosure",
      content: "Saroj College of Pharmacy does not sell or trade personal information to outside parties. Information may be shared with government bodies as required by law or with educational partners for academic purposes, with appropriate confidentiality agreements in place."
    },
    {
      title: "Cookies and Tracking",
      content: "Our website may use cookies to enhance user experience. These cookies help us understand site usage patterns and improve our services. Users can control cookie preferences through their browser settings."
    },
    {
      title: "Policy Updates",
      content: "This privacy policy may be updated periodically. Significant changes will be communicated through our official website and college notice boards. Continued use of our services constitutes acceptance of the updated policy."
    }
  ];

  return (
  <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Saroj College of Pharmacy
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-indigo-600">
            Privacy Policy
          </h2>
         
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="mb-8 text-gray-600">
              Saroj College of Pharmacy is committed to protecting the privacy and security of all individuals associated with our institution. This policy outlines how we collect, use, and safeguard your personal information.
            </p>
            
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
                  >
                    <span className="font-medium text-gray-900">{section.title}</span>
                    <svg
                      className={`h-5 w-5 text-gray-500 transform ${expandedSections.includes(index) ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {expandedSections.includes(index) && (
                    <div className="p-4 bg-white text-gray-600">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-medium text-blue-800 mb-3">Contact Information</h4>
              <p className="text-blue-700">
                For any questions regarding our privacy practices, please contact our Data Protection Officer:
              </p>
              <ul className="mt-2 space-y-1 text-blue-700">
                <li>Email: <span className="font-medium">info@seglko.org</span></li>
                <li>Phone: <span className="font-medium">+91-5222239810</span></li>
                <li>Address: <span className="font-medium">Saroj College of Pharmacy, Lucknow, Uttar Pradesh</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Saroj College of Pharmacy, Lucknow. All rights reserved.</p>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default PrivacyPolicy;