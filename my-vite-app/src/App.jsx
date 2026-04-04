import { useState } from 'react'
import Button from './Button'
import './App.css'
import yaleLogo from './assets/yale-logo.png' // add your logo here

function App() {
  return (
    <div className="app-container">
      
      <div className="card">
        <img src={yaleLogo} alt="Yale Logo" className="logo" />

        <h1>Welcome to Yale Dining Planner</h1>

        <div className="button-container">
          <Button title="Meals this Week" />
          <Button title="Budget Analytics" />
          <Button title="Yale Dining Menus" />
        </div>
      </div>
    </div>
  );
}

export default App;