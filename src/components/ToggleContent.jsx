import React, { useState } from "react";
import "./toggleContent.css";

const ToggleContent = ({ content }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleContent = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="toggle-content-container">
      <button onClick={toggleContent} className={isShown ? "active" : ""}>
        {isShown ? "Hide Content" : "Show Content"}
      </button>
      {isShown && <div className="content-box">{content}</div>}
    </div>
  );
};

export default ToggleContent;
