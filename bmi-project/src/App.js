import React from 'react';
import logo from './logo.svg';
import './App.css';
import BmiCalculator from './BmiCalculator'
function App() {
  return (
    <div>
      <h1 style = {{textAlign:"center"}}>Shourie's Bmi Calculator</h1>
      <br/>
      <br/>
      <BmiCalculator/>
    </div>
  );
}

export default App;
