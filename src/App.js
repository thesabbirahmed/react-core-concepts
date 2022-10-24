import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Heading file: {7+3}</h1>
        <p>My first App</p>
      </header>
    </div>
  );
}

export default App;

