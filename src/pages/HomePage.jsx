
import Navbar from './../components/Navbar';
import HeroSection from './../components/HeroSection';
import FeatureSection from './../components/FeaturesSection'
const HomePage = () => {
  return (
    <div className='bg-eff2fd min-h-screen'> 
      <Navbar />
      <div className="">
        <HeroSection />
        <FeatureSection />
      </div>
      
    </div>
  )
}

export default HomePage