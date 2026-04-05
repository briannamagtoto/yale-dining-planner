import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import MealsPage from './MealsPage'
import BudgetPage from './BudgetPage'
import MenusPage from './MenusPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<MealsPage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/menus" element={<MenusPage />} />
    </Routes>
  );
}

export default App;