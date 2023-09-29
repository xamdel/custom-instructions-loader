import React from "react";

const HelpButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <button className="help-button" onClick={onClick} title="Help">
        ?
      </button>
    );
  };
  
  export default HelpButton;  