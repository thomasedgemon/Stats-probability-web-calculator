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
//        const TI = {state} this would be a local var. how to make global?
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

function PofA () {
  const ProbA = {
  TextInputA / TotalInstances
  }

ReactDOM.render(
  <TextInputA />,
  <TextInputB />,
  <TextInputC />,
  <TotalInstances />
);

// shouldn't need to export these, i don't think.
// export default { TextInputA };
// export default { TextInputB };
// export default { TextInputC };
// export { TotalInstances };
