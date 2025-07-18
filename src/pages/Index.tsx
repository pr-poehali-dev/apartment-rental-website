import Hero from "@/components/Hero";
import FeaturedApartments from "@/components/FeaturedApartments";
import Services from "@/components/Services";
import TopUp from "@/components/TopUp";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedApartments />
      <Services />
      <TopUp />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
