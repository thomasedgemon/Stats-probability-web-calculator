import "./App.css";
import React, { useState, render } from "react";
import ReactDOM from "react-dom/client";
import "./components.js";
import { UnderTheHood } from "./components.js";

function App() {
  return (
    <div>
      <h1 style={{ color: "slateblue" }}>
        Behavior Analytic Conditional Probability Calculator
      </h1>
      <UnderTheHood />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p1>
        This calculator utilizes definitions of conditional probability used
        solely in Behavior Analysis.
        <br></br>
        It cannot be used for standard mathematical probabilities.
      </p1>
      <br></br>
      <br></br>
      <p2>
        Definitional citation: "Lerman, D.C., & Iwata, B.A. (1993). Descriptive
        and experimental analyses of variables maintaining self-injurous
        behavior. <i>Journal of Applied Behavior Analysis, 26 </i> (3), 293-319"
      </p2>
      <br></br>
      <br></br>
      <p3>
        For questions or comments, contact Anna Kate at ake0008@auburn.edu
        <br></br>
        or Thomas at tedgemon@gmail.com
      </p3>
      <br></br>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
export default App;
