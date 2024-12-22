import React, { useState } from 'react';

function StepFour({ onBack, onNext }) {
  const [image, setImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Base64 formatında resmi kaydet
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);

    const requestBody = JSON.stringify({
      key: "sk-mgMiLJjXDv5ynzIv6wlQrbjaJ2nmcX2tEkMdmUwBCv1T2Se9", // Buraya kendi API anahtarınızı yazın
      prompt: "Pixar-style character of a child",
      negative_prompt: null,
      init_image: image, // Kullanıcının yüklediği Base64 resmi burada kullanıyoruz
      width: "512",
      height: "512",
      samples: "1",
      num_inference_steps: "30",
      safety_checker: "no",
      enhance_prompt: "yes",
      guidance_scale: 7.5,
      strength: 0.7,
      seed: null,
      base64: "no",
      webhook: null,
      track_id: null,
    });

    try {
      const response = await fetch("https://stablediffusionapi.com/api/v3/img2img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      const data = await response.json();
      if (data.status === "success") {
        setGeneratedImage(data.output[0]); // Üretilen resmi kaydet
      } else {
        setError(data.message || "Failed to generate image. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while generating the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Upload your child’s picture</h2>

      <div className="mb-6">
        {image ? (
          <img src={image} alt="Uploaded Preview" className="mx-auto rounded shadow-lg w-48 h-48 object-cover" />
        ) : (
          <div className="w-48 h-48 mx-auto border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
            <p className="text-gray-500">No image uploaded</p>
          </div>
        )}
      </div>

      <input
        type="file"
        className="file-input w-full max-w-xs bg-inputdark file-input-primary hover:file-input-info transition-all ease-in-out duration-150"
        onChange={handleImageChange}
      />

      <div className="my-6">
        {loading ? (
          <p>Generating image, please wait...</p>
        ) : generatedImage ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">Generated Pixar Character:</h3>
            <img src={generatedImage} alt="Generated" className="mx-auto rounded shadow-lg w-48 h-48 object-cover" />
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
          disabled={!image || loading}
        >
          Generate Image
        </button>
        <button
          onClick={() => onNext()}
          className="px-4 py-2 bg-secondary text-white rounded"
          disabled={!generatedImage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepFour;
