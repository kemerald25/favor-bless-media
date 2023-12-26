import React, { useState } from "react";
import Navbar from "../components/Navbar";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}
      <Navbar />
    </div>
  );
};

export default App;
