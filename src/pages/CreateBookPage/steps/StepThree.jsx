import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch ve useSelector import ediyoruz
import { setBookPages } from "../../../features/bookSlice"; // Redux aksiyonunu import ediyoruz

function StepThree({ onBack, onSubmit }) {
  const dispatch = useDispatch();
  const pagesFromRedux = useSelector((state) => state.book.pages); // Redux'tan sayfa sayısını alıyoruz

  const [pages, setPages] = useState(pagesFromRedux); // Başlangıçta Redux'tan alınan sayfa sayısını state'e set ediyoruz

  const handlePagesChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), 50); // Sayfa sayısını 1 ile 50 arasında sınırlıyoruz
    setPages(value); // Sayfa sayısını state'e set ediyoruz
    dispatch(setBookPages(value)); // Redux store'a sayfa sayısını kaydediyoruz
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Step 3: Pages & Create</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Pages:</label>
        <input
          type="number"
          value={pages}
          onChange={handlePagesChange} // Sayfa sayısı değiştiğinde Redux'a kaydediyoruz
          min={1}
          max={50}
          className="input input-bordered w-full text-white bg-inputdark focus:outline-none"
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
          className="px-6 py-2 bg-primary text-white rounded"
        >
          Create Book
        </button>
      </div>
    </div>
  );
}

export default StepThree;
