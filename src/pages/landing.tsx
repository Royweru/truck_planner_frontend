import { useState } from 'react';
import { Truck, Map, Clock, Navigation } from 'lucide-react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { useNavigate } from 'react-router';

export const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const navigate = useNavigate()
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-blue-500" />,
      title: "Smart Route Planning",
      description: "Optimize your routes with advanced AI-powered tracking and planning."
    },
    {
      icon: <Map className="w-12 h-12 text-green-500" />,
      title: "Real-Time Tracking",
      description: "Monitor your journey with precise GPS and live updates."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-500" />,
      title: "Hours of Service",
      description: "Automate ELD logs and stay compliant with FMCSA regulations."
    },
    {
      icon: <Navigation className="w-12 h-12 text-orange-500" />,
      title: "Comprehensive Insights",
      description: "Detailed analytics and performance tracking for drivers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            TruckMaster Pro
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your comprehensive solution for intelligent trip planning, route optimization, 
            and electronic logging compliance.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            onClick={()=>navigate('/driver-dashboard')}
            >
              Start Planning
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-blue-900 scale-105' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {feature.icon}
                  <h3 className="mt-4 font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-900/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            How TruckMaster Pro Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Streamline your trucking operations with our cutting-edge platform designed 
            for maximum efficiency and compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-blue-500 mb-4">
              <Truck className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold mb-3">Route Optimization</h3>
            <p className="text-gray-400">
              Advanced algorithms calculate the most efficient routes, saving time and fuel.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-green-500 mb-4">
              <Clock className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compliance Tracking</h3>
            <p className="text-gray-400">
              Automatic ELD logging and Hours of Service tracking to ensure regulatory compliance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-purple-500 mb-4">
              <Navigation className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Insights</h3>
            <p className="text-gray-400">
              Comprehensive analytics and reporting for fleet management and performance tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default LandingPage;