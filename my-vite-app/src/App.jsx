import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import MealsPage from './MealsPage'
import BudgetPage from './BudgetPage'
import SemesterBudgetPage from './SemesterBudgetPage';
import './App.css'
import WeeklyBudgetPage from './WeeklyBudgetPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<MealsPage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/semester-budget" element={<SemesterBudgetPage />} />
      <Route path="/weekly-budget" element={<WeeklyBudgetPage />} />
    </Routes>
  );
}

export default App;