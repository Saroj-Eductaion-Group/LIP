import React, { useState } from 'react';
import Layout from '../components/Layout';

const FeeStructure = () => {
  const [mode, setMode] = useState('Regular'); // 'Regular' or 'Global'
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = {
    Regular: [
      {
        degree: "B.Pharm",
        duration: 4,
        fees: {
          year1: 100000,
          year2: 100000,
          year3: 100000,
          year4: 100000,
          total: 400000
        },
        specializations: [
          "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis",
          "Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs"
        ]
      },
      {
        degree: "D.Pharm",
        duration: 2,
        fees: {
          year1: 90000,
          year2: 90000,
          total: 180000
        },
        specializations: [
          "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis",
          "Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs"
        ]
      },
      {
        degree: "M.Pharm (Pharmacology)",
        duration: 2,
        fees: {
          year1: 100000,
          year2: 100000,
          total: 200000
        }
      },
      {
        degree: "M.Pharm (Medical Chemistry)",
        duration: 2,
        fees: {
          year1: 90000,
          year2: 90000,
          total: 180000
        }
      },
      {
        degree: "Doctorate Programs",
        duration: 3,
        fees: {
          year1: 125000,
          year2: 125000,
          year3: 125000,
          total: 375000
        }
      }
    ],
    Global: [
      {
        degree: "B.Pharm",
        duration: 4,
        fees: {
          year1: 150000,
          year2: 150000,
          year3: 150000,
          year4: 150000,
          total: 600000
        },
        specializations: [
          "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis",
          "Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs"
        ]
      },
      {
        degree: "D.Pharm",
        duration: 2,
        fees: {
          year1: 140000,
          year2: 140000,
          total: 280000
        },
        specializations: [
          "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis",
          "Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs"
        ]
      },
      {
        degree: "M.Pharm (Pharmacology)",
        duration: 2,
        fees: {
          year1: 150000,
          year2: 150000,
          total: 300000
        }
      },
      {
        degree: "M.Pharm (Medical Chemistry)",
        duration: 2,
        fees: {
          year1: 140000,
          year2: 140000,
          total: 280000
        }
      },
      {
        degree: "Doctorate Programs",
        duration: 3,
        fees: {
          year1: 200000,
          year2: 200000,
          year3: 200000,
          total: 600000
        }
      }
    ]
  };

  const toggleProgram = (degree) => {
    if (expandedProgram === degree) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(degree);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
<Layout>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lucknow Institute of Pharmacy
          </h1>
          <h2 className="text-2xl font-semibold text-indigo-600 mt-2">
            Fee Structure
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setMode('Regular')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                mode === 'Regular'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Regular Mode
            </button>
            <button
              onClick={() => setMode('Global')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                mode === 'Global'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Global Mode
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {programs[mode].map((program, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg transition-all duration-200"
            >
              <button
                onClick={() => toggleProgram(program.degree)}
                className="w-full px-4 py-5 sm:px-6 text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {program.degree}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">
                      Duration: {program.duration} years
                    </span>
                    <span className="font-semibold text-indigo-600">
                      Total: {formatCurrency(program.fees.total)}
                    </span>
                    <svg
                      className={`ml-4 h-5 w-5 text-gray-500 transform transition-transform ${
                        expandedProgram === program.degree ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedProgram === program.degree && (
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <div className="mb-4">
                    <h4 className="text-md font-medium text-gray-900 mb-2">
                      Annual Fees
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(program.fees)
                        .filter(([key]) => key !== 'total')
                        .map(([year, amount]) => (
                          <div
                            key={year}
                            className="bg-gray-50 p-3 rounded-md flex justify-between"
                          >
                            <span className="text-gray-600">
                              Year {year.replace('year', '')}:
                            </span>
                            <span className="font-medium">
                              {formatCurrency(amount)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {program.specializations && (
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">
                        Specializations
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {program.specializations.map((spec, i) => (
                          <li key={i} className="text-gray-600">
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
          <h3 className="text-lg font-medium text-indigo-800 mb-2">
            Note:
          </h3>
          <p className="text-indigo-700">
            Fees are subject to change. Please contact the institute for the most updated fee structure.
          </p>
        </div>
      </div>
    </div>
</Layout>
  );
};

export default FeeStructure;
