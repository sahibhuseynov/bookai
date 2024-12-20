import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"; // motion import edilmiştir
import pixar1 from "../assets/images/pixar 1.webp";
import pixar2 from "../assets/images/pixar 2.webp";
import pixar3 from "../assets/images/pixar 3.webp";

const books = [
  { id: 1, title: "Pixar 1", img: pixar1 },
  { id: 2, title: "Pixar 2", img: pixar2 },
  { id: 3, title: "Pixar 3", img: pixar3 },
];

function BooksShowcaseSection() {
  return (
    <section className=" py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Sol Taraf: Metin */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10 text-center md:text-left">
          {/* motion ile h2'yi sarmaladık */}
          <motion.h2
            className="text-4xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, scale: 0.9 }} // Başlangıç: opaklık 0 ve biraz küçülmüş
            whileInView={{ opacity: 1, scale: 1 }} // Görünür olunca animasyon başlar, büyür ve opaklık artar
            transition={{ duration: 1 }} // Animasyon süresi
            viewport={{ once: true }} // Animasyon yalnızca bir kez tetiklenir
          >
            Create Your Unique Story Adventure
          </motion.h2>
          <p className="text-lg text-gray-600">
            Design a one-of-a-kind childrens story with our intuitive AI-powered storybook creator. Tailor every detail with unique characters, vibrant illustrations, and captivating plots. With the added fun of text-to-speech narration, your little one will love every moment of reading. Begin crafting your personalized storybook today.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Start Your Journey
          </button>
        </div>
  
        {/* Sağ Taraf: Carousel */}
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={1000} // Geçiş süresi (1 saniye)
            interval={3000} // Her slide arasındaki süre (3 saniye)
            className="shadow-lg rounded-lg"
          >
            {books.map((book) => (
              <div key={book.id} className="text-center">
                <img
                  src={book.img}
                  alt={book.title}
                  className="rounded-lg max-h-74 object-cover mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default BooksShowcaseSection;
