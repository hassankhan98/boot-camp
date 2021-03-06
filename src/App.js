import React, {useState} from 'react'
import Message from './Message.js'
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'daylight':''}`}>
      <h3>Day Time : {isMorning ? 'Morning' : 'Night'}</h3>
      <button onClick={()=> setMorning(!isMorning)}>Day/Night</button>
      <br />
      <Message counter={count} />
      <br />
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}>-</button>
      
    </div>
  );
}

export default App;
