import React, { useState } from 'react';
import './styles.css';

const App2 = () => {
  const [counter, setCounter] = React.useState(0);
  const counterHandler = () => {
    setCounter(() => {
      return counter + 1;
    });
  };
  return (
    <div>
      <p id="button">{counter}</p>
      <button onClick={counterHandler}>increment</button>
    </div>
  );
};

export default App2;
