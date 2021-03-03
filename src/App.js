import React from 'react'
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div className="App">
      <Dinner StudentName="Hassan Tanoli" StudentAge="23"/>
      <hr />
      <Dinner StudentName="Hassan Khan" StudentAge="22"/>
      <hr />
      <Dinner StudentName="Hassan Cypher" StudentAge="21"/>
    </div>
  );
}

export default App;
