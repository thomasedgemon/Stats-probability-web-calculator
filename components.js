import "./App.js";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
//import { UnderTheHood } from "./components.js";
//import { PofA } from "./components.js";

export function UnderTheHood() {
  const [userValue1, setUserValue1] = useState("");
  const [userValue2, setUserValue2] = useState("");
  const [userValue3, setUserValue3] = useState("");
  const [userValue4, setUserValue4] = useState("");
  const [userValue5, setUserValue5] = useState("");
  const PofC = userValue3 / userValue4;
  const PofA = userValue1 / userValue4;
  const PofB = userValue2 / userValue4;
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
  //have user input A intersect B etc
  //have user input a intersect b intersect C
  //have
  //have citations for definitions at the bottom of the page: "Lerman, D.C., & Iwata, B.A. (1993). Descriptive and experimental analyses of variables maintaining
  //self-injurous behavior. {italics} Journal of Applied Behavior Analysis, 26 {end italics} (3), 293-319"
  //
  //final output to include: prob of a given b and theta.
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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
      <div>
        <p1>
          P(A) is {PofA}. <br></br>
          P(B) is {PofB}.<br></br>
          P(C) is {PofC}.<br></br>
          P(Theta) is {PofTheta}
          <br></br>
          P(A|B) is {PofAgivenB}.<br></br>
          P(A|C) is {PofAgivenC}. <br></br>
          P(B|A) is {PofBgivenA}. <br></br>
          P(B|C) is {PofBgivenC}. <br></br>
          P(C|A) is {PofCgivenA}. <br></br>
          P(C|B) is {PofCgivenB}. <br></br>
        </p1>
      </div>
    </div>
  );
}
