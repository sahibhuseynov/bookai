import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { VscPassFilled } from "react-icons/vsc";
import { MdCreditCardOff } from "react-icons/md";
import { FaHive } from "react-icons/fa6";
function PricingSection() {
    return (
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 ">
            Start Crafting Your Story Today
          </h1>
          <span className="text-lg mb-12 block ">
            Join a community of creators using AI to turn their ideas into magical stories.No payment details needed to begin. Create your personalized book and we’ll print it and ship it to your address, with your name as the author!
          </span>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-6">
           <div className="flex items-center gap-2 px-8 py-3 text-blue-800 bg-white  text-base rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer "> 
                <button className="">
                  Begin Your Book Journey 
                </button>
                <FaLongArrowAltRight size={20} />
           </div>
            <div className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-base rounded-full transition cursor-pointer hover:bg-white hover:text-blue-800 hover:scale-105 duration-300 ease-in-out ">   
                <button>
                  Learn More About Printing
                </button>
                <BsFillPrinterFill size={20} color="white" />
            </div>
          </div>
  
          <div className="flex sm:flex-row flex-col  items-center justify-center gap-12 mt-14">
            <span className="flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"> <VscPassFilled  color="white" size={20}/> Free to Start</span>
            <span className="flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"> <MdCreditCardOff color="white" size={20} /> No Credit Card</span>
            <span className="flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"> <FaHive color="white" size={20} /> Unlimited Stories</span>
          </div>
        </div>
      </section>
    );
  }
  
  export default PricingSection;
  