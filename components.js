import "./App.js";
import React, { useState } from "react";
//import { render } from "react-dom";
//import ReactDOM from "react-dom";

export function UnderTheHood() {
  const [userValue1, setUserValue1] = useState(""); //instances of A
  const [userValue2, setUserValue2] = useState(""); //instances of B
  const [userValue3, setUserValue3] = useState(""); //instances of C
  const [userValue4, setUserValue4] = useState(""); //total instances
  const [userValue5, setUserValue5] = useState(""); //A int B
  const [userValue6, setUserValue6] = useState(""); // A int C
  const [userValue7, setUserValue7] = useState(""); // B int c
  const [userValue8, setUserValue8] = useState(""); // A int B int C
  //user inputs
  var PofC = userValue3 / userValue4;
  var PofA = userValue1 / userValue4;
  var PofB = userValue2 / userValue4;
  //calculated probs
  var PofAgivenB = (userValue5 / userValue4) / PofB;
  var PofAgivenC = userValue6 / userValue4 / PofC;
  var PofBgivenA = userValue5 / userValue4 / PofA;
  var PofBgivenC = userValue7/ userValue4 / PofC;
  var PofCgivenA = userValue6 / userValue4 / PofA;
  var PofCgivenB = userValue7 / userValue4 / PofB;
  var PofAintBintC = userValue8 / userValue4;
  var PofAGivenBandTheta = PofAintBintC / userValue7;
  //probabilities rounded
  PofC = PofC.toFixed(2);
  PofA = PofA.toFixed(2);
  PofB = PofB.toFixed(2);
  PofAgivenB = PofAgivenB.toFixed(2);
  PofAgivenC = PofAgivenC.toFixed(2);
  PofBgivenA = PofBgivenA.toFixed(2);
  PofCgivenA = PofCgivenA.toFixed(2);
  PofCgivenB = PofCgivenB.toFixed(2);
  PofBgivenC = PofBgivenC.toFixed(2);
  PofAGivenBandTheta = PofAGivenBandTheta.toFixed(2);

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
      <label htmlFor={"my-input"}> Enter A intersect B: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue5}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue5(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter A intersect C: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue6}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue6(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter B intersect C: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue7}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue7(event.target.value);
        }}
      />
      <br></br>
      <label htmlFor={"my-input"}> Enter A intersect B intersect C: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={userValue8}
        placeholder={"Type here"}
        onChange={(event) => {
          setUserValue8(event.target.value);
        }}
      />
      <br></br>
      <br></br>
      <div>
        <p1>
          P(A) is {PofA}. <br></br>
          P(B) is {PofB}.<br></br>
          P(C) is {PofC}.<br></br>
          P(A|B) is {PofAgivenB}.<br></br>
          P(A|C) is {PofAgivenC}. <br></br>
          P(B|A) is {PofBgivenA}. <br></br>
          P(B|C) is {PofBgivenC}. <br></br>
          P(C|A) is {PofCgivenA}. <br></br>
          P(C|B) is {PofCgivenB}. <br></br>
          P(A|B, θ) is {PofAGivenBandTheta}. <br></br>
        </p1>
      </div>
    </div>
  );
}
