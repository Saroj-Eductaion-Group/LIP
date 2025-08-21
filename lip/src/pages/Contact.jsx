import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, Loader2 } from "lucide-react"; // use Loader2 for spinner
import Layout from "../components/Layout";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    college: "Lucknow Institute of Pharmacy"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Thank you for contacting us! We'll respond soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error.message);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Toaster/>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-indigo-900 mb-2">
              Contact Us
            </h1>
            <p className="text-indigo-700 max-w-xl mx-auto text-lg">
              We are here to assist you. Please reach out with any questions or
              feedback.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                <h2 className="text-2xl font-semibold text-indigo-900">
                  Contact Information
                </h2>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-indigo-800">Address</h3>
                    <address className="not-italic text-indigo-700 leading-relaxed mt-1 text-sm">
                      Chand Sarai, Near Gosaiganj, Sultanpur Road , 20th KM
                      Stone, Lucknow, Uttar Pradesh, India, 226001
                    </address>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-indigo-600 w-6 h-6" />
                  <div className="text-indigo-700">
                    <h3 className="font-semibold text-indigo-800">Phone</h3>
                    <p className="text-sm">+91-9513731275</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-indigo-600 w-6 h-6" />
                  <div className="text-indigo-700">
                    <h3 className="font-semibold text-indigo-800">Email</h3>
                    <p className="text-sm">admission.cell@seglko.org</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  title="Saroj College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.160135088548!2d81.08214597521918!3d26.771164976731846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd063127323b%3A0xea2ce086f31059de!2sLucknow%20Institute%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1748342147944!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-semibold text-indigo-900 mb-6">
                Send us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-3xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-indigo-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-indigo-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-indigo-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-indigo-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry Subject"
                    className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-indigo-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full rounded-lg border border-indigo-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    loading
                      ? "bg-indigo-300 cursor-not-allowed text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Submitting, please wait...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>

               
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
