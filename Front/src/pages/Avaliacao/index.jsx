import React, { useState } from "react";
import UserForm from "./UserForm";
import ReviewForm from "./ReviewForm";
import Thanks from "./Thanks";
import Steps from "./Steps";

// Icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

// CSS
import "./style.css";

// Initial form state
const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function Index() {
  const [data, setData] = useState(formTemplate);
  const [currentStep, setCurrentStep] = useState(0);

  // Update form field handler
  const updateFieldHandler = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Array of form components
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  // Function to change step
  const changeStep = (step, event) => {
    event.preventDefault(); // Prevent form submission
    setCurrentStep(step);
  };

  // Determine if it's the last step
  const isLastStep = currentStep === formComponents.length - 1;

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
        "Ficamos felizes com sua experiência! Utilize o formulário abaixo para avaliar este barco."
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{formComponents[currentStep]}</div>
          <div className="actions">
            {currentStep > 0 && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
