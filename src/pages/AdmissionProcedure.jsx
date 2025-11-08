import { Link } from "react-router-dom"
import { CheckCircle, GraduationCap, Phone, Mail } from "lucide-react"
import Layout from "../components/Layout"

export default function AdmissionProcess() {
  const steps = [
    {
      number: 1,
      title: "Online Registration",
      description: "Go to the registration link – Online Registration. A registration form will appear.",
    },
    {
      number: 2,
      title: "Fill Required Details",
      description: 'Fill in all the required details and click on "Submit".',
    },
    {
      number: 3,
      title: "Payment Page",
      description:
        'After submitting the registration form, you will be directed to the Payment page. Click on the "Make Payment" option.',
    },
    {
      number: 4,
      title: "Registration Fee",
      description: "Candidates/Students are required to submit a registration fee of Rs. 2200 before proceeding.",
    },
    {
      number: 5,
      title: "Login Credentials",
      description:
        "After successful payment of the registration fee, a temporary Login Id and Password will be sent to the respective Email Ids of the candidates. Students/Candidates can also take a printout of their Registration form.",
    },
    {
      number: 6,
      title: "Student Login",
      description:
        "For logging into your account, click on the Student Login. Fill in the login credentials sent to your Email Id and click on Login.",
    },
    {
      number: 7,
      title: "Complete Admission Form",
      description: "Students/Candidates can then proceed to fill the Complete Admission Form.",
    },
    {
      number: 8,
      title: "Permanent Login ID",
      description:
        "After filling the form, a permanent Login Id will be sent to the Email Id of the student/candidate.",
    },
    {
      number: 9,
      title: "Print Admission Form",
      description: "Take a printout of the admission form after successfully submitting the form online.",
    },
  ]

  return (

    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
     
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">HOW TO APPLY?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to complete your online application process for admission to Saroj College of Pharmacy
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg select-none">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed pl-14">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Application?</h3>
            <p className="text-blue-100 mb-6">Begin your journey towards a successful career in pharmacy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://siu.in8.nopaperforms.com/"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Online Registration
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Need Help? Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-8">
          <div className="border border-orange-200 bg-orange-50 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-2">Important Information:</h4>
            <ul className="text-orange-700 space-y-1 text-sm list-disc list-inside">
              <li>Registration fee of Rs. 2200 is mandatory and non-refundable</li>
              <li>Keep your email ID active throughout the admission process</li>
              <li>Take printouts of all forms for your records</li>
              <li>Contact our admission office for any technical difficulties</li>
            </ul>
          </div>
        </div>
      </main>

      
    </div>
    </Layout>
  )
}
