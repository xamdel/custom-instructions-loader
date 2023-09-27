import React, { useState } from 'react';

interface InsertButtonProps {
  instructionOne: string;
  instructionTwo: string;
}

const InsertButton: React.FC<InsertButtonProps> = ({ instructionOne, instructionTwo }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function insertInstructions() {
    const message = {
      type: "INSERT_INSTRUCTIONS",
      instructionOne,
      instructionTwo,
    };
    chrome.runtime.sendMessage(message, (response) => {
      if (response.status === "error") {
        setErrorMessage(response.message);
      } else {
        setErrorMessage(null);
      }
    });
  };

  return (
    <div>
      <button onClick={insertInstructions}>
        Insert Instructions
      </button>
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default InsertButton;