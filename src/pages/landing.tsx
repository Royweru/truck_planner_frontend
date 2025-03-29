
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { WhyChoose } from '@/components/why-choose';
import { CTA } from '@/components/cta';
import { BlogsSection } from '@/components/blog-sections';
import { Footer } from '@/components/footer';

// Main Landing Page Component
const LandingPage = () => {

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-900 bg-opacity-80 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/truck-logo.png" alt="TruckMaster Pro Logo" className="h-10 mr-3" />
            <span className="text-white text-xl font-bold">TruckMaster Pro</span>
          </div>
          <div className="space-x-6">
            <a href="#features" className="text-white hover:text-blue-300 transition">Features</a>
            <a href="#whyus" className="text-white hover:text-blue-300 transition">Why us</a>
            <a href="#blogs" className="text-white hover:text-blue-300 transition">Blogs</a>
            <a href="/auth" className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-900 transition">Login / Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
   <Hero />

      {/* Features Section */}
   <Features />

      {/* Why Choose TruckMaster Pro Section */}
    <WhyChoose />
      {/* CTA Section */}
   <CTA />

      {/* Blog Section */}
 
 <BlogsSection />
      {/* Footer Section */}
     <Footer />
    </div>
  );
};

export default LandingPage;