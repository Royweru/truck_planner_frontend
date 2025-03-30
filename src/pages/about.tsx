import { useState } from "react";
import {
  MapPin,
  ChevronRight,
  Users,
  Award,
  Zap,
  Target,
  Mail,
  Phone,
} from "lucide-react";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent z-10"></div>
        <img
          src="/highway-bg.jpg"
          alt="Highway background"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About TruckMaster Pro
          </h1>
          <p className="text-lg max-w-3xl text-gray-200">
            Revolutionizing the logistics industry with innovative technology
            solutions for truck drivers and fleet managers since 2018.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "mission"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab("story")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "story"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
          >
            Our Story
          </button>
         
        </div>

        {/* Mission Content */}
        {activeTab === "mission" && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Our Mission
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <p className="text-gray-300 mb-6">
                At TruckMaster Pro, we're on a mission to transform the trucking
                industry through cutting-edge technology that prioritizes
                efficiency, safety, and compliance. We believe that every driver
                deserves the best tools to succeed on the road.
              </p>
              <p className="text-gray-300 mb-6">
                Our comprehensive solution aims to eliminate the stress of route
                planning, hours-of-service tracking, and regulatory compliance,
                allowing drivers and fleet managers to focus on what truly
                matters: safe and efficient deliveries.
              </p>
              <div className="flex items-center text-blue-400 font-medium cursor-pointer group">
                <span>Learn more about our values</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <Zap size={40} className="text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-gray-300">
                    Pioneering solutions that transform logistics
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <Target size={40} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                  <p className="text-sm text-gray-300">
                    Optimizing routes to save time and fuel
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <Award size={40} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-sm text-gray-300">
                    Consistent performance you can trust
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
                  <Users size={40} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-sm text-gray-300">
                    Supporting drivers across the nation
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Story Content */}
        {activeTab === "story" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center relative inline-block">
              Our Story
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h2>

            <div className="space-y-12 mt-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-gray-800 p-4 rounded-lg md:w-1/3">
                  <img
                    src="/about-story.jpg"
                    alt="Founding year"
                    className="rounded w-full"
                  />
                  <div className="text-center mt-2 text-blue-400 font-bold">
                    2018
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    The Beginning
                  </h3>
                  <p className="text-gray-300">
                    TruckMaster Pro was founded by a team of logistics experts
                    and software engineers who recognized the challenges faced
                    by truck drivers daily. After experiencing firsthand the
                    inefficiencies of paper logs and manual route planning, our
                    founders set out to create a comprehensive digital solution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="bg-gray-800 p-4 rounded-lg md:w-1/3">
                  <img
                    src="/about-story2.jpg"
                    alt="Growth phase"
                    className="rounded w-full"
                  />
                  <div className="text-center mt-2 text-blue-400 font-bold">
                    2020
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Rapid Growth
                  </h3>
                  <p className="text-gray-300">
                    By 2020, our platform had expanded to include AI-powered
                    route optimization, real-time tracking, and comprehensive
                    compliance tools. We partnered with major trucking companies
                    across North America, helping them modernize their
                    operations and improve efficiency by up to 30%.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-gray-800 p-4 rounded-lg md:w-1/3">
                  <img
                    src="/about-story3.jpg"
                    alt="Present day"
                    className="rounded w-full"
                  />
                  <div className="text-center mt-2 text-blue-400 font-bold">
                    Today
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Industry Leader
                  </h3>
                  <p className="text-gray-300">
                    Today, TruckMaster Pro serves over 50,000 drivers and 500+
                    fleets nationwide. Our platform continues to evolve with
                    advanced analytics, predictive maintenance, and integrated
                    compliance solutions. We're proud to be recognized as an
                    industry leader in trucking technology innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Content */}
   
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-gray-300">Active Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Fleet Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-800 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about TruckMaster Pro? Our team is ready to help
              you optimize your trucking operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" />
                  <span>support@truckmasterpro.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" />
                  <span>1-800-TRUCK-PRO</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" />
                  <span>123 Logistics Way, Transport City, TC 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-700 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-gray-700 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded w-full hover:opacity-90 transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
