import React, {useState} from 'react'
import './App.css';

function App() {

  let [count, setCount] = useState(1);

  return (
    <div className="App">
      <h3>Value of the count is : {count}</h3>
    </div>
  );
}

export default App;
