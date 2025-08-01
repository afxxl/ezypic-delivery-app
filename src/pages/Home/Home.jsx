import HeroSection from "../../components/sections/HeroSection/HeroSection";
import FeaturesSection from "../../components/sections/FeaturesSection/FeaturesSection";
import ServicesSection from "../../components/sections/ServicesSection/ServicesSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
