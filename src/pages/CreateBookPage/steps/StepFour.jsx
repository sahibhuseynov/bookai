import  { useState } from "react";

function StepFour( {onBack, onNext} ) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (image) {
      onNext(); // Eğer resim yüklendiyse bir sonraki adıma geçiş yapıyoruz
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Upload your child’s picture</h2>
      <p className="mb-6">This will be used to personalize your Ebook.</p>
      <div className="mb-6">
        {image ? (
          <img
            src={image}
            alt="Uploaded Preview"
            className="mx-auto rounded shadow-lg w-48 h-48 object-cover"
          />
        ) : (
          <div className="w-48 h-48 mx-auto border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
            <p className="text-gray-500">No image uploaded</p>
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        className="block mx-auto mb-6"
        onChange={handleImageChange}
      />
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={!image} // Resim yüklenmediyse Next butonu devre dışı olur
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepFour;
