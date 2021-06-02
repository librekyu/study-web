import React, { useState } from "react";

const StateFunc = () => {
  const [state, setState] = useState("");

  const StateOn = () => {
    setState("ON!");
  };
  const StateOff = () => {
    setState("OFF");
  };

  return <div>{state} 온오프 State</div>;
};
