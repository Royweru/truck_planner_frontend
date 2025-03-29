import React from 'react'
import { motion } from 'framer-motion';

export const WhyChoose = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      };
      const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
      };
    
  return (
    <section className="bg-gray-800 py-16" id='features'>
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-serif font-bold text-center text-white mb-12"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Why Choose TruckMaster Pro?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-400 text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Efficiency Boost</h3>
              <p className="text-gray-300">
                Save time and fuel with optimized routes and real-time traffic updates, ensuring faster deliveries.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="text-green-400 text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Compliance Made Easy</h3>
              <p className="text-gray-300">
                Stay compliant with FMCSA regulations through automated ELD logging and hours-of-service tracking.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="text-purple-400 text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-300">
                Leverage detailed analytics to improve driver performance and operational efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
