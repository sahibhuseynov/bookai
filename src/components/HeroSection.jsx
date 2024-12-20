import { motion } from "framer-motion"; // motion import edin
import { FaPlayCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBahai } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f9fc] to-[#f8f9fc] py-20  ">
     <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="rounded-full  bg-white flex gap-3 border border-blue-100 px-3 py-2 items-center justify-center mb-8 shadow-md hover:shadow-lg duration-300 cursor-pointer">
          <FaBahai size={20} />
          <span className="text-base font-semibold text-blue-800">AI-Powered Book Creation</span>
        </div>
  
        {/* Animasyonlu h1 */}
        <motion.h1
          className="text-7xl font-extrabold"
          initial={{ opacity: 0, y: -100 }} // Başlangıç durumu
          animate={{ opacity: 1, y: 0 }}   // Sonraki durum
          transition={{ duration: 1, type: "spring", stiffness: 120 }} // Geçiş ayarları
        >
          Life with Custom Stories
        </motion.h1>
  
        {/* Animasyonlu h1 */}
        <motion.h1
          className="text-7xl font-extrabold mb-3 text-blue-800"
          initial={{ opacity: 0, x: -100 }} // Başlangıç durumu
          animate={{ opacity: 1, x: 0 }}   // Sonraki durum
          transition={{ duration: 1, type: "spring", stiffness: 120 }} // Geçiş ayarları
        >
          Create Magical Books!
        </motion.h1>
  
        <p className="my-4 text-xl font-normal">
          Craft stunning books effortlessly with cutting-edge AI. <br /> Design, customize, and publish in just a few clicks!
        </p>
  
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 justify-center mt-6 px-6 py-3 rounded-full text-white bg-blue-600  duration-300 transform hover:scale-105">
            Start writing now <FaLongArrowAltRight size={20} />
          </button>
          <button className="flex items-center gap-2 justify-center mt-6 px-6 py-3 rounded-full text-blue-600 bg-white border border-blue-600 ml-4">
            Watch demo <FaPlayCircle size={20} />
          </button>
        </div>
     </div>
    </section>
  );
}

export default HeroSection;
