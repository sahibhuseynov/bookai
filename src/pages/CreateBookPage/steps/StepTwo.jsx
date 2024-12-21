
import { useState } from 'react';
function StepTwo({ onBack, onNext }) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const generateStory = () => {
    setStory(`Once upon a time, in a magical land, a hero named ${title}...`);
  };

  return (
    <div className='max-w-md mx-auto'>
      <h2 className="text-2xl font-bold mb-4">Step 2: Story & AI</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Book Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <button
        disabled={!title}
        onClick={generateStory}
        className="px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 mb-4"
      >
        Generate Story
      </button>
      {story && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Generated Story:</h3>
          <p>{story}</p>
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
          className="px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
