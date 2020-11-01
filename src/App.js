import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ListDemo from './ListDemo.js';


function App() {
  return (
    <div className="App">
      <div>
        <h4>Ex1</h4>
        {IncrementerButton(1, 2)}
      </div>
      <div>
        <h4>Ex2</h4>
        {ListDemo}
      </div>
    </div>
  );
}


//Ex1
function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function IncrementerButton(value, incrementer) {
  const [count, setCount] = useStickyState(0, "count");

  return (
    <div>
      < button onClick={() => setCount(count + incrementer)} > Increment</button >
      < button onClick={() => setCount(count - incrementer)} > Decrement</button >
      <p>Count: '{count}'</p>
    </div>
  )
}

//Ex3


export default App;