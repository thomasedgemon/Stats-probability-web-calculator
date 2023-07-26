import "./App.css";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  return (
    <div>
      <h1>Conditional Probability Calculator</h1>
      <h2>Created and maintained by Thomas and Anna Kate Edgemon</h2>
      <br></br>
      <TextInputA />
      <br></br>
      <TextInputB />
      <br></br>
      <TextInputC />
      <br></br>
      <TotalInstances />
      <br></br>
      <Example />
    </div>
  );
}

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
function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Click for result</button>

      {isOpen && (
        <div>
          <div>This is the result.</div>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TextInputA />);
root.render(<TextInputB />);
root.render(<TextInputC />);
root.render(<TotalInstances />);
root.render(<Example />);
export default App;
