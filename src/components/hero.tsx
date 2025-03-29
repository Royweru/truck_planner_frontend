import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, type: "spring", stiffness: 120 },
    },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{backgroundImage: `url('/truck_hero.webp')`}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          TruckMaster Pro
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Your comprehensive solution for intelligent trip planning, route
          optimization, and electronic logging compliance.
        </motion.p>
        <motion.a
          href="#start-planning"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Start Planning
        </motion.a>
      </div>
    </section>
  );
};
