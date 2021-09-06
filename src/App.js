import React from "react";

import "./styles.css";
import useCounter from "./hooks/useCounter";

export default function App() {
  const { counter, getCounterProps, addCounter, removeCounter } = useCounter();

  return (
    <div className="App">
      <div {...getCounterProps()}> {counter} </div>
      <div>
        <button {...getCounterProps({ onClick: addCounter })}>add</button>
        <button {...getCounterProps({ onClick: removeCounter })}>remove</button>
      </div>
    </div>
  );
}
