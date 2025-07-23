import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CourseBenefitsSection from "@/components/CourseBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <CourseBenefitsSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
