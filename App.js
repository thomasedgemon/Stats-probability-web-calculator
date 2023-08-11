import "./App.css";
import React, { useState, render } from "react";
import ReactDOM from "react-dom/client";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./components.js";
import { UnderTheHood } from "./components.js";

function App() {
  return (
    <div>
      <h1> Created and Maintained by Thomas and Anna Kate Edgemon </h1>
      <UnderTheHood />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
