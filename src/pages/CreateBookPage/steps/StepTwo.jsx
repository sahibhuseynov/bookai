import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
function StepTwo({ onBack, onNext }) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useSelector((state) => state.book.language);
  // Çevresel değişkenden API_KEY alıyoruz
  const API_KEY = 'AIzaSyAjIRi7lT21zSoNfm8Ffjoq-F0QLdEj2Qc';

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generateStory = async () => {
    if (!title) return;

    setLoading(true);
    setError(""); // Hata mesajını sıfırla

    const prompt = `Write a story about a hero named ${title} who goes on an adventure. The story should be in ${language}.`;


    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setStory(text); // API yanıtını hikayeye ekle
    } catch (error) {
      setError("An error occurred while generating the story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Step 2: Story & AI</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Book Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          className="input input-bordered w-full text-white bg-inputdark focus:outline-none"
        />
      </div>
      <button
        disabled={!title}
        onClick={generateStory}
        className="px-6 py-2 bg-primary text-white rounded disabled:bg-gray-400 mb-4"
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {story && (
        <div className="bg-inputdark p-4 rounded">
          <h3 className="font-semibold mb-2">Generated Story:</h3>
          <p
            onClick={openModal}
            className="text-gray-300 cursor-pointer"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {story}
          </p>
        </div>
      )}

      {/* Modal for full story */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-inputdark z-50 p-8 rounded-lg w-3/4 md:w-1/2 max-h-[80vh] overflow-y-auto ">
            <h3 className="text-2xl font-semibold mb-4">Full Story</h3>
            <p>{story}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
        >
          Back
        </button>
        <button
          disabled={!story}
          onClick={() => onNext({ title, story })}
          className="px-6 py-2 bg-primary text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
