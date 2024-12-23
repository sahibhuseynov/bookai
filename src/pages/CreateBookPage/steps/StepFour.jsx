import { useState } from "react";

function StepFour({ onBack, onNext }) {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateImage = async () => {
    if (!prompt) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.deepai.org/api/text2img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "52795d7b-14d0-4f60-9d9b-426c2ea818c8", // API anahtarınızı buraya yazın
        },
        body: JSON.stringify({ text: prompt }),
      });

      const data = await response.json();
      if (data && data.output_url) {
        setGeneratedImage(data.output_url); // Üretilen resmin URL'sini kaydet
      } else {
        setError(data.error || "Failed to generate image. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while generating the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Enter a description to generate an image</h2>

      <div className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your image (e.g., a futuristic city at night)"
          className="w-full max-w-md px-4 py-2 border rounded-md"
        />
      </div>

      <div className="my-6">
        {loading ? (
          <p>Generating image, please wait...</p>
        ) : generatedImage ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">Generated Image:</h3>
            <img src={generatedImage} alt="Generated" className="mx-auto rounded shadow-lg w-64 h-auto object-cover" />
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : null}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="px-4 py-2 bg-gray-600 text-white rounded">
          Back
        </button>
        <button
          onClick={handleGenerateImage}
          className="px-4 py-2 bg-primary text-white rounded"
          disabled={!prompt || loading}
        >
          Generate Image
        </button>
        <div className="flex items-center">
          {error && !generatedImage && (
            <p className="text-yellow-500 mr-2">Image could not be generated, but you can still continue.</p>
          )}
          <button
            onClick={() => onNext()}
            className="px-4 py-2 bg-secondary text-white rounded"
            disabled={loading}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
