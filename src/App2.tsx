import React, { useState } from 'react';

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter(() => {
      return counter + 1;
    });
  };
  return (
    <div>
      <p id="button"></p>
      <button onClick={counterHandler}>press - {counter}</button>
    </div>
  );
};

export default App2;
