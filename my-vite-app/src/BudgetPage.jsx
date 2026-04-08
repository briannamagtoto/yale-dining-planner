import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Menu.css'
import yaleLogo from './assets/yale-logo.png' // add your logo here

function BudgetPage() {
  const navigate = useNavigate()
  return (<div className="app-container">

      <div className="card">

      <div className="home-button-container">
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>

        <img src={yaleLogo} alt="Yale Logo" className="logo" />

        <h1>Budget Analytics Menu</h1>

        <div class="description">
          <p>Welcome to the Budget Analytics Menu! Here you can analyze your weekly and semester spending</p>
          <br/>
        </div>

        <div className="button-container">
          <Button title="Semester Budget Overview" onClick={() => navigate('/semester-budget')} />
          <Button title="Weekly Budget Oveview" onClick={() => navigate('/weekly-budget')} />
        </div>
      </div>
    </div>);
}
export default BudgetPage