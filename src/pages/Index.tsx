
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MemberBenefits from "@/components/MemberBenefits";
import SpecialFeatures from "@/components/SpecialFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MemberBenefits />
        <SpecialFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
