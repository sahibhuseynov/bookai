import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"; // Motion import edilmiştir
import feature2 from "../assets/images/aiimage1.webp";
import feature3 from "../assets/images/aiimage2.webp";
import feature4 from "../assets/images/aiimage3.webp";
import { FaStarOfLife } from "react-icons/fa6";const features = [
  { id: 1, title: "Personalized Adventure", img: feature2 },
  { id: 2, title: "Fun Narration", img: feature3 },
  { id: 3, title: "Engaging Content", img: feature4 },
];

function AIStorybookSection() {
  return (
    <section className=" py-16 px-8 bg-gradient-to-b from-[#f8f9fc] to-[#f8f9fc]">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Sol Taraf: Carousel */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={1000} // Geçiş süresi (1 saniye)
            interval={3000} // Her slide arasındaki süre (3 saniye)
            className="shadow-lg rounded-lg"
          >
            {features.map((feature) => (
              <div key={feature.id} className="text-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="rounded-lg max-h-74 object-cover mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
  
        {/* Sağ Taraf: Metin */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Motion ile h2'yi sarmaladık */}
          <motion.h2
            className="text-4xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, scale: 0.9 }} // Başlangıç: opaklık 0 ve biraz küçülmüş
            whileInView={{ opacity: 1, scale: 1 }} // Görünür olunca animasyon başlar, büyür ve opaklık artar
            transition={{ duration: 1 }} // Animasyon süresi
            viewport={{ once: true }} // Animasyon yalnızca bir kez tetiklenir
          >
            Create a Book Where Youre the Main Character
          </motion.h2>
          <p className="text-lg text-gray-600 mb-4">
            <span className="text-blue-800">Our AI-powered storybook platform offers amazing features to customize, design, and publish the perfect story for your child.</span> Choose from a wide array of characters, scenes, and plots to create a one-of-a-kind experience that will captivate young readers.
          </p>
          <ul className="text-left text-lg text-gray-600 space-y-2">
            <li className="flex items-center gap-3 text-black "> <FaStarOfLife color="blue"/>  Interactive Storytelling</li>
            <li className="flex items-center gap-3 text-black"><FaStarOfLife color="blue"/> Personalized Adventure for Every Child</li>
            <li className="flex items-center gap-3 text-black"><FaStarOfLife color="blue"/> Fun and Engaging Narration</li>
          </ul>
          <button className="mt-7 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Start Creating Now
          </button>
        </div>
     </div>
    </section>
  );
}

export default AIStorybookSection;
