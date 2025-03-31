
import {motion} from 'framer-motion'
export const BlogsSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      };
 // Animation for section elements
 const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };
  return (
       <section className="bg-gray-900 py-16" id='blogs'>
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-serif font-bold text-center text-white mb-12"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Latest Insights
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Blog Post 1 */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/blog1.jpg" 
                  alt="Blog Post 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Top 5 Tips for Efficient Route Planning</h3>
                  <p className="text-gray-400 mb-4">
                    Learn how to optimize your routes and save time with these expert tips for truck drivers.
                  </p>
                  <a href="#blog-1" className="text-blue-400 hover:text-blue-300 transition">Read More</a>
                </div>
              </div>
              {/* Blog Post 2 */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/blog2.jpg" 
                  alt="Blog Post 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Understanding FMCSA Compliance</h3>
                  <p className="text-gray-400 mb-4">
                    A guide to staying compliant with FMCSA regulations using TruckMaster Pro.
                  </p>
                  <a href="#blog-2" className="text-blue-400 hover:text-blue-300 transition">Read More</a>
                </div>
              </div>
              {/* Blog Post 3 */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/blog3.jpg" 
                  alt="Blog Post 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">The Future of Trucking Technology</h3>
                  <p className="text-gray-400 mb-4">
                    Explore the latest trends in trucking tech and how they can benefit your operations.
                  </p>
                  <a href="#blog-3" className="text-blue-400 hover:text-blue-300 transition">Read More</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
  )
}
