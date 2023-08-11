//import "./App.css";
//import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
//import Popup from "reactjs-popup";
//import "reactjs-popup/dist/index.css";
import "./components.js";
import { UnderTheHood } from "./components.js";
import { PopupWindow } from "./components.js";
import { TheMath } from "./components.js";

function App() {
  return (
    <div>
      <UnderTheHood /> <PopupWindow />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
