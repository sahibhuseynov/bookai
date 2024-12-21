
import { useState } from 'react';
function StepOne( {onNext} ) {
  const [language, setLanguage] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className='max-w-md mx-auto'>
      
      <h2 className="text-2xl font-bold mb-4">Step 1: Language & Author</h2>
      <div className='flex  flex-col '>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Book Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Turkish">Turkish</option>
            <option value="Azerbaijani">Azerbaijani</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block font-semibold mb-2">Author Name:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
      </div>
      <button
        disabled={!language || !author}
        onClick={() => onNext({ language, author })}
        className="px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 w-full"
      >
        Next
      </button>
    </div>
  );
}

export default StepOne;
