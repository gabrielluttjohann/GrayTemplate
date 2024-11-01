import CallToAction from "@/components/sections/CallToAction/CallToAction";
import Contact from "@/components/sections/Contact/Contact";
import Features from "@/components/sections/Features/Features";
import Footer from "@/components/sections/Footer1/Footer";
import Header from "@/components/sections/Header1/Header";
import Hero from "@/components/sections/Hero1/Hero";
import Services from "@/components/sections/Services/Services";
import Structure from "@/components/sections/Structure/Structure";

const Index: React.FC = () => (
  <>
    <Header />
    <Hero />
    <Features />
    <CallToAction />
    <Structure />
    <Services />
    <Contact />
    <Footer />
  </>
);

export default Index;
