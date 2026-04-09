import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Menu.css'
import yaleLogo from './assets/yale-logo.png' // add your logo here

function Home() {
  const navigate = useNavigate()

  return (
    <div className="app-container">

      <div className="card">
        <img src={yaleLogo} alt="Yale Logo" className="logo" />

        <h1>Welcome to Yale Dining Planner</h1>

        <div>
          <p>Track your dining points and meal swipes, plan your weekly budget, and analyze your spending habits with ease.</p>
          <br/>
        </div>

        <div className="button-container">
          <Button title="Log Meals this Week" onClick={() => navigate('/meals')} />
          <Button title="Analyze Spending" onClick={() => navigate('/budget')} />
          <Button title="Yale Dining Menus" onClick={() => window.open('https://hospitality.yale.edu/menus', '_blank')} />
        </div>
      </div>
    </div>
  );
}

export default Home;