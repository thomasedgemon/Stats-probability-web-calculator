import React, { useState } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom";

function TextInputA() {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}> Enter instances of A: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
    </div>
  );
}
function TextInputB() {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}> Enter instances of B: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
    </div>
  );
}
function TextInputC() {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}> Enter instances of C: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
    </div>
  );
}
function TotalInstances() {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}> Enter total instances: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

ReactDOM.render(
  <TextInputA />,
  <TextInputB />,
  <TextInputC />,
  <TotalInstances />
);
export { TextInputA };
export { TextInputB };
export { TextInputC };
export { TotalInstances };
