import Hero from "@/components/Hero";
import FeaturedApartments from "@/components/FeaturedApartments";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedApartments />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
