import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const validityMsg = (l) => {
    var msg = "Invalid message";
    if (l >=3){
      msg = "Valid message";
    }
    return msg;
  }
  const [inputValue, setInputValue] = useState(0);
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value.length);
    }
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={inputChangeHandler}/>
            <p>{validityMsg(inputValue)}</p>
        </form>
    );
}