import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBookLanguageAndAuthor } from "../../../features/bookSlice"; // Redux aksiyonlarını import ediyoruz

function StepOne({ onNext }) {
  const dispatch = useDispatch();
  const [language, setLanguageState] = useState("az"); // Varsayılan değer 'az'
  const [author, setAuthorState] = useState("");

  const handleNext = () => {
    // Redux state'ini güncelle
    dispatch(setBookLanguageAndAuthor({ language, author }));
    // Bir sonraki adıma geç
    onNext();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Step 1: Language & Author</h2>
      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Book Language:</label>
          <select
            className="select select-primary w-full bg-inputdark text-white focus:outline-none border-none"
            value={language} // `value` ile state'e bağlanıyor
            onChange={(e) => setLanguageState(e.target.value)}
          >
            <option value="az">Azerbaijan</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="gr">German</option>
            <option value="it">Italian</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Author Name:</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full text-white bg-inputdark focus:outline-none"
            value={author} // State'e bağlı olarak güncellenir
            onChange={(e) => setAuthorState(e.target.value)}
          />
        </div>
      </div>
      <button
        disabled={!language || !author} // Boş olup olmadığını kontrol eder
        onClick={handleNext} // Redux'a kaydedip sonraki adıma geçer
        className="px-6 py-2 bg-primary text-white rounded disabled:bg-gray-400 w-full"
      >
        Next
      </button>
    </div>
  );
}

export default StepOne;
