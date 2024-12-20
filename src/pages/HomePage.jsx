
import Navbar from './../components/Navbar';
import HeroSection from './../components/HeroSection';
import FeatureSection from './../components/FeaturesSection'
import AIStorybookSection from './../components/AIStorybookSection';
import PricingSection from './../components/Pricing';
import Footer from './../components/Footer';
const HomePage = () => {
  return (
    <div className=' min-h-screen'> 
      <Navbar />
      <div className="">
        <HeroSection />
        <FeatureSection />
        <AIStorybookSection />
        <PricingSection />
        <Footer />
      </div>
      
    </div>
  )
}

export default HomePage