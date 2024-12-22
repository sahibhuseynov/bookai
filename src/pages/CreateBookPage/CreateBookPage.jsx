import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/userSlice";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive"; // StepFive'i import ettik
import Header from "./Header"; // Header bileşenini dışarıdan import ediyoruz

function CreateBookPage() {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Language & Author", "Upload Image", "Story & AI", "Pages & Create"];

  // Genel bir fonksiyon ile adım geçişini yönetiyoruz
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Önceki adıma dönmek için fonksiyon
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col h-screen bg-darkblue">
      {/* Header Component */}
      <Header onLogout={() => dispatch(clearUser())} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col text-white">
        {/* Başlangıç Mesajı */}
        {currentStep === 1 && (
          <div className="text-center mt-8 ">
            <h1 className="text-4xl font-extrabold">Start creating your Book!</h1>
            <p className="mt-4 text-lg text-white ">Generate your Book in just 4 steps.</p>
          </div>
        )}

        {/* DaisyUI Step Progress Bar (currentStep 5 olduğunda gizlenir) */}
        {currentStep !== 5 && (
          <ul className="steps my-4 z-0">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step ${currentStep >= index + 1 ? "step-primary" : ""}`}
              >
                {step}
              </li>
            ))}
          </ul>
        )}

        {/* Step Content */}
        <div className="p-8">
          {currentStep === 1 && <StepOne onNext={handleNextStep} />}
          {currentStep === 2 && <StepFour onBack={handlePreviousStep} onNext={handleNextStep} />}
          {currentStep === 3 && <StepTwo onNext={handleNextStep} onBack={handlePreviousStep} />}
          {currentStep === 4 && (
            <StepThree
              onBack={handlePreviousStep}
              onSubmit={() => {
                // Kitap oluşturma işlemi burada başlıyor
                setCurrentStep(5); // StepFive'e geçiş
              }}
            />
          )}
          {currentStep === 5 && <StepFive />}  {/* StepFive'i ekliyoruz */}
        </div>
      </div>
    </div>
  );
}

export default CreateBookPage;
