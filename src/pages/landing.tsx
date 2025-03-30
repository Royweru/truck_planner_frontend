
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { WhyChoose } from '@/components/why-choose';
import { CTA } from '@/components/cta';
import { BlogsSection } from '@/components/blog-sections';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';

// Main Landing Page Component
const LandingPage = () => {

  return (
    <div className="font-sans">
      {/* Navbar */}
    <Navbar />

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