import { useState, useEffect } from "react";

function StepFive() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 saniye boyunca bekleyelim, sonra animasyon bitiyor ve bir başarı mesajı gösteriyoruz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 saniye bekleme süresi

    return () => clearTimeout(timer); // Component unmount olduğunda timer'ı temizle
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Creating your Ebook...</h2>
          <p className="text-lg">Please wait, your Ebook is being created.</p>
          <div className="loader mt-4"> {/* Loader animasyonu */}
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Ebook is ready!</h2>
          <p className="text-lg">Your Ebook has been successfully created.</p>
        </div>
      )}
    </div>
  );
}

export default StepFive;
