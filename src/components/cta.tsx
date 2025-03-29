
import {motion} from 'framer-motion'
export const CTA = () => {
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
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-16" id='whyus'>
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-serif font-bold text-white mb-4"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Ready to Optimize Your Trucking Operations?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-200 mb-8 max-w-xl mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Join thousands of truck drivers and fleet managers who trust TruckMaster Pro for smarter, more efficient trips.
      </motion.p>
      <motion.a
        href="#get-started"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        Get Started Now
      </motion.a>
    </div>
  </section>
  )
}
