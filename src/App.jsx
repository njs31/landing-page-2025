import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Best from "./components/Best";
import Lms from "./components/Lms";
import ERPFeaturesGrid from "./components/Erp";
import Modules from "./components/Modules";
import ContactUsSection from "./components/Letstalk";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import Appd from "./components/Appd";
import StudentPortal from "./components/Learning";
import DashboardSolutions from "./components/Solutions";
import FloatingWhatsApp from "./components/whatsapp";
import TestimonialsSection from "./components/Testimonials";
import CustomCursor from './components/CustomCursor';
import logoImage from './assets/onesquare.png';
const App = () => {
  return (
    
      <div className="App">
      <CustomCursor imageSrc={logoImage} />
      <Navbar />
      <Hero />
      <Best />
      <Lms />
      <ERPFeaturesGrid />
      <Modules />
      <DashboardSolutions />

      <StudentPortal />
      <TestimonialsSection />
      <ContactUsSection />
      <FAQ />
      <Appd />
      <Footer />
      <FloatingWhatsApp /> 
      </div>
  
  );
};

export default App;
