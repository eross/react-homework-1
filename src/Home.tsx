import React, { useState } from 'react';
import './styles.css';

// don't change the Component name "App"
export default function Home() {
  const [deleteOn, setDeleteOn] = useState(false);
  const deleteHandler = () => {
    setDeleteOn(true);
  };

  const proceedHandler = () => {
    setDeleteOn(false);
  };

  let warning = <div></div>;
  if (deleteOn) {
    warning = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    );
  }
  return (
    <div>
      {warning}
      <button onClick={deleteHandler}>Deletex</button>
    </div>
  );
}
