import React from "react";

import { callAll } from "../utils";

const useCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const addCounter = () => setCounter(counter + 1);
  const removeCounter = () => setCounter(counter - 1);

  function getCounterProps({ onClick, ...props } = {}) {
    console.log(onclick);
    return {
      style: { color: counter > 3 ? "red" : "gray" },
      onClick: callAll(onClick),
      ...props
    };
  }

  return {
    counter,
    addCounter,
    removeCounter,
    getCounterProps
  };
};

export default useCounter;
