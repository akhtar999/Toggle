import React from "react";
import ToggleContent from "./ToggleContent";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <h1>Toggle Content</h1>
      <ToggleContent content="I am the content to be toggled. Feel free to hide me." />
    </div>
  );
};

export default App;
