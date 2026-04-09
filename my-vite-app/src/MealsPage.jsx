import { useNavigate } from 'react-router-dom';
import { useBudget } from './BudgetContext';
import './MealsPage.css';
import { useState } from 'react';

function MealsPage() {
  const navigate = useNavigate();
  const { weeklyBudget, mealsByDay } = useBudget();
  const diningPointsLeft = weeklyBudget.diningPointsBudget - weeklyBudget.diningPointsSpent;
  const mealSwipesLeft = weeklyBudget.mealSwipesBudget - weeklyBudget.mealSwipesSpent;


  const [showTotalInfo, setShowTotalInfo] = useState(false);
  const [showMealsInfo, setShowMealsInfo] = useState(false); 

  const days = [
    { name: 'Monday', date: 'Feb 23' },
    { name: 'Tuesday', date: 'Feb 24' },
    { name: 'Wednesday', date: 'Feb 25' },
    { name: 'Thursday', date: 'Feb 26' },
    { name: 'Friday', date: 'Feb 27' },
    { name: 'Saturday', date: 'Feb 28' },
    { name: 'Sunday', date: 'March 1' },
  ].map((day) => ({ ...day, 'meals': mealsByDay[day.name.toLowerCase()]?.length ?? 0 }));

  return (
    <div className="meals-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>

      <aside className="week-total-card">
        <div className="week-total-header">
          <h3>Week Total</h3>
          <button 
            className="info-btn"
            onClick={() => setShowTotalInfo(true)}
          >
            i
          </button>
        </div>
        <div className="stat">
          <span className="stat-value">{mealSwipesLeft}</span>
          <span className="stat-label">swipes left</span>
        </div>
        <div className="stat">
          <span className="stat-value">{diningPointsLeft}</span>
          <span className="stat-label">points left</span>
        </div>
        <div className="stat">
          <span className="stat-value">$0.00</span>
          <span className="stat-label">dollars spent</span>
        </div>
      </aside>

      <main className="calendar-view">
        <header className="meals-header">
          <div className="meals-header-top">
            <h1>Meals this Week</h1>
            <button 
              className="info-btn info-btn-dark-outline" 
              onClick={() => setShowMealsInfo(true)}
            >
              i
            </button>
          </div>
          <p className="date-range">February 23 - March 1</p>
        </header>

        <div className="days-list">
          {days.map((day) => (
            <button key={day.name} className="day-row-btn" onClick={() => navigate(`/day-meals/${day.name.toLowerCase()}`)}>
              <div className="day-info">
                <span className="day-name">{day.name}</span>
                <span className="day-date">{day.date}</span>
              </div>
              <span className="meal-count">{day.meals} meals logged &gt;</span>
            </button>
          ))}
        </div>
      </main>

      {showTotalInfo && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              Remaining meal resources given the budget you set. You can modify your budget under the Analyze Spending section.
            </p>
            <button onClick={() => setShowTotalInfo(false)}>
              Got it
            </button>
          </div>
        </div>
      )}

      {showMealsInfo && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              This page shows all meals you've logged this week (swipes, points, and out of pocket money use). Click on a day to view or edit the day's meals.
            </p>
            <button onClick={() => setShowMealsInfo(false)}>
              Got it
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default MealsPage;
