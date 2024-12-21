import { useState } from "react";
function StepThree( {onBack, onSubmit} ) {
  const [pages, setPages] = useState(5);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Step 3: Pages & Create</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Pages:</label>
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          min={1}
          max={50}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit({ pages })}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Create Book
        </button>
      </div>
    </div>
  );
}

export default StepThree;
