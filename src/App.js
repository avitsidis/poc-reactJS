import React from 'react';
import './App.css';
import Welcome from './Welcome.js' 
import Clock from './Clock.js' 
import Toggle from './Toggle';
import LogForm from './LogForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="user"/>
        <Clock/>
        <div><Toggle useColor="true"/></div>
        <div><LogForm /></div>
      </header>
    </div>
  );
}

export default App;
