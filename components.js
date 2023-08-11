//import "./App.js";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { userValue1 } from "./components.js";
import { userValue2 } from "./components.js";
import { userValue3 } from "./components.js";
import { userValue4 } from "./components.js";
import { userValue5 } from "./components.js";

export function UnderTheHood() {
  const [userValue1, setUserValue1] = useState("");
  const [userValue2, setUserValue2] = useState("");
  const [userValue3, setUserValue3] = useState("");
  const [userValue4, setUserValue4] = useState("");
  const [userValue5, setUserValue5] = useState("");
  return (
    <div>
      <label htmlFor={"my-input"}> Enter instances of A: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue1}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue1(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter instances of B: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue2}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue2(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter instances of C: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue3}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue3(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter total instances: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue4}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue4(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter Theta's value: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue5}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue5(event.target.value);
        }}
      />
    </div>
  );
}

export function TheMath() {
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
}

export function PopupWindow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Click for result</button>

      {isOpen && (
        <div>
          <div>This is the content of the pop-up.</div>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  );
}
