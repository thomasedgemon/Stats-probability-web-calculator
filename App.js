//import "./App.css";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./components.js";

//does components needs to be imported here, or this imported to components?

function App() {
  const [userValue1, setUserValue1] = useState(0);
  const [userValue2, setUserValue2] = useState(0);
  const [userValue3, setUserValue3] = useState(0);
  const [userValue4, setUserValue4] = useState(0);
  const [userValue5, setUserValue5] = useState(0);
  //const [answer, setAnswer] = useState(0); do i even need this?

  //const notValid =
  //  userValue1 === 0 ||
  //  userValue2 === 0 ||
  //  userValue3 === 0 ||
  //  userValue4 === 0;

  //const handleCalculation = () => {
  //do math
  const PofA = userValue1 / userValue4;
  const PofB = userValue2 / userValue4;
  const PofC = userValue3 / userValue4;
  const PofTheta = userValue5 / userValue4;
  const AintB = PofA * PofB;
  const AintC = PofA * PofC;
  const BintC = PofB * PofC;
  const PofAgivenB = AintB / PofB;
  const PofAgivenC = AintC / PofC;
  const PofBgivenA = AintB / PofA;
  const PofCgivenA = AintC / PofA;
  const PofCgivenB = BintC / PofB;
  const PofBgivenC = BintC / PofC;

  //if (notValid) {
  //error, the user needs to enter more data
  //validation message
  //}
  //execute the calculation
  //const calculatedAnswer = yada yada

  //if (!notValid) {
  //  setAnswer(calculatedAnswer);
  //}

  return (
    <div>
      <h1>Conditional Probability Calculator</h1>
      <h2>Created and maintained by Thomas and Anna Kate Edgemon</h2>
    </div>
  );
}

export default App;

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<TextInputA />);
//root.render(<TextInputB />);
//root.render(<TextInputC />);
//root.render(<TotalInstances />);
//root.render(<Example />);
