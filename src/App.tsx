import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [inputValue, setInputValue] = useState("");
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value.length)
    }
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={inputChangeHandler}/>
            <p>Invalid message</p>
        </form>
    );
}