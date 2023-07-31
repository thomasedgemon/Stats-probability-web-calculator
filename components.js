import "./App.js";
import { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Click for result</button>

      {isOpen && (
        <div>
          <div>this is the result</div>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  );
}

function TextInputA() {
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
    </div>
  );
}

function TextInputB() {
  return (
    <div>
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
    </div>
  );
}

function TextInputC() {
  return (
    <div>
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
    </div>
  );
}

function TotalInstances() {
  return (
    <div>
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
    </div>
  );
}

function Theta() {
  return (
    <div>
      <label htmlFor={"my-input"}> Enter Theta: </label>
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
