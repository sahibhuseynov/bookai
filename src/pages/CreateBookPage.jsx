import { useState } from 'react';

function CreateBookPage() {
  const [bookTitle, setBookTitle] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTitleSubmit = () => {
    if (bookTitle.trim()) {
      setIsSubmitted(true); // Başlık girildiyse, diğer adımlara geçiş
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Create Your Storybook
          </h1>

          {!isSubmitted ? (
            <div>
              <label className="label">
                <span className="label-text text-gray-900 dark:text-white">Give your book a title</span>
              </label>
              <input
                type="text"
                placeholder="Enter book title"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                required
              />
              <button
                className="btn w-full btn-primary mt-4"
                onClick={handleTitleSubmit}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Your Book Title: {bookTitle}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4">Now, let's add a photo and create your story!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CreateBookPage;
