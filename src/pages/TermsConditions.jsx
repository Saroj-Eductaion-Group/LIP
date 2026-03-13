import { useState } from 'react';
import Layout from '../components/Layout';

const TermsAndConditions = () => {
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
      title: "Admission Terms",
      content: "Admission to Saroj College of Pharmacy is subject to meeting the eligibility criteria set by the Pharmacy Council of India and the university. The college reserves the right to modify admission requirements as per regulatory changes."
    },
    {
      title: "Academic Conduct",
      content: "Students are expected to maintain high standards of academic integrity. Plagiarism, cheating, or any form of academic misconduct will result in disciplinary action as per college policies and university regulations."
    },
    {
      title: "Fee Payment",
      content: "All fees must be paid by the stipulated deadlines. Late payments may incur penalties. Fee refunds are subject to the college's refund policy and regulatory guidelines."
    },
    {
      title: "Code of Conduct",
      content: "Students and staff must adhere to the college's code of conduct, which includes respectful behavior, proper attire, and compliance with all institutional rules. Violations may lead to disciplinary proceedings."
    },
    {
      title: "Intellectual Property",
      content: "All educational materials, research outputs, and college publications are the intellectual property of Saroj College of Pharmacy unless otherwise stated. Unauthorized use or distribution is prohibited."
    },
    {
      title: "Grievance Redressal",
      content: "The college has established mechanisms for addressing grievances related to academic or administrative matters. Students and staff should follow the prescribed procedures for submitting and resolving complaints."
    },
    {
      title: "Liability",
      content: "While the college takes all reasonable precautions, it cannot be held liable for loss or damage to personal property or for personal injury except where proven negligence on the part of the institution is established."
    },
    {
      title: "Amendments",
      content: "The college reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the college website or notice boards."
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
            Terms & Conditions
          </h2>
        
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="mb-8 text-gray-600">
              These terms govern your relationship with Saroj College of Pharmacy. By engaging with our institution, you agree to comply with these terms and all applicable laws and regulations.
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
            
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
              <h4 className="text-lg font-medium text-yellow-800 mb-3">Important Notice</h4>
              <p className="text-yellow-700">
                By enrolling at Saroj College of Pharmacy, students and their parents/guardians acknowledge that they have read, understood, and agreed to these terms and conditions. The college reserves all rights to take appropriate action for any violations of these terms.
              </p>
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

export default TermsAndConditions;