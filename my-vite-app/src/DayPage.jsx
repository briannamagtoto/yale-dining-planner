import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBudget } from './BudgetContext';
import './DayPage.css';

const MOCK_DAYS = {
    monday:    { name: 'Monday',    date: 'February 23', index: 0 },
    tuesday:   { name: 'Tuesday',   date: 'February 24', index: 1 },
    wednesday: { name: 'Wednesday', date: 'February 25', index: 2 },
    thursday:  { name: 'Thursday',  date: 'February 26', index: 3 },
    friday:    { name: 'Friday',    date: 'February 27', index: 4 },
    saturday:  { name: 'Saturday',  date: 'February 28', index: 5 },
    sunday:    { name: 'Sunday',    date: 'March 1',     index: 6 },
};

function DayPage() {
  const navigate = useNavigate();
  const { dayId } = useParams();
  const dayData = MOCK_DAYS[dayId] || MOCK_DAYS.monday;
  const { mealsByDay, weeklyBudget, deleteMeal } = useBudget();
  const meals = mealsByDay[dayId] ?? [];
  const [confirmDelete, setConfirmDelete] = useState(null);

  const baseSwipes = Math.floor(weeklyBudget.mealSwipesBudget / 7);
  const extraSwipeDays = weeklyBudget.mealSwipesBudget % 7;
  const daySwipesAlloc = baseSwipes + (dayData.index < extraSwipeDays ? 1 : 0);
  const dayPointsAlloc = weeklyBudget.diningPointsBudget / 7;

  const swipesUsed = meals.filter((m) => m.cost.toLowerCase().includes('swipe')).length;
  const pointsUsed = meals.reduce((sum, m) => {
    const match = m.cost.match(/^([\d.]+)\s*points?/i);
    return sum + (match ? parseFloat(match[1]) : 0);
  }, 0);
  const dollarsSpent = meals.reduce((sum, m) => {
    const match = m.cost.match(/^\$([\d.]+)/);
    return sum + (match ? parseFloat(match[1]) : 0);
  }, 0);

  const daySwipes = daySwipesAlloc - swipesUsed;
  const dayPoints = Math.max(0, dayPointsAlloc - pointsUsed).toFixed(2);

  return (
    <div className="day-page-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <button className="back-btn" style={{ left: 'auto', right: 40 }} onClick={() => navigate('/meals')}>
        Week View
      </button>

      <header className="meals-header">
        <h1>{dayData.name}'s Meals</h1>
        <p className="date-range">{dayData.date}</p>
      </header>

      <div className="day-content-layout">
        <aside className="day-total-card">
          <h3>Day Total</h3>
          <div className="day-stat">
            <span className="day-stat-value">{daySwipes}</span>
            <span className="day-stat-label">swipes left</span>
          </div>
          <div className="day-stat">
            <span className="day-stat-value">{dayPoints}</span>
            <span className="day-stat-label">points left</span>
          </div>
          <div className="day-stat">
            <span className="day-stat-value">${dollarsSpent.toFixed(2)}</span>
            <span className="day-stat-label">dollars spent</span>
          </div>
        </aside>

        <main className="meals-logged-section">
          <div className="day-info-header">
            <span className="day-date-text">{dayData.name} {dayData.date.split(' ')[1]}</span>
            <div className="meals-logged-title-box">
              <h2>Meals Logged</h2>
            </div>
          </div>

          <div className="meals-list-container">
            {meals.length === 0 ? (
              <p className="no-meals-text">No meals logged yet.</p>
            ) : (
              meals.map((meal) => (
                <div key={meal.id} className="meal-item-row">
                  <div className="meal-card-info">
                    <span className="meal-time">{meal.time}</span>
                    <span className="meal-desc">{meal.location}</span>
                    <span className="meal-cost-badge">{meal.cost}</span>
                  </div>
                  <div className="meal-actions">
                    <button
                      className="icon-btn delete-btn"
                      onClick={() => setConfirmDelete({ id: meal.id, location: meal.location })}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                    <button
                      className="icon-btn edit-btn"
                      onClick={() => navigate(`/day-meals/${dayId}/edit/${meal.id}`, { state: { meal } })}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <button className="add-meal-btn" onClick={() => navigate(`/day-meals/${dayId}/add`)}>
            + Add a Meal
          </button>

          {confirmDelete && (
            <div className="delete-modal-overlay">
              <div className="delete-modal">
                <p>Are you sure you want to delete '{confirmDelete.location}'?</p>
                <div className="delete-modal-actions">
                  <button
                    className="modal-confirm-btn"
                    onClick={() => {
                      deleteMeal(dayId, confirmDelete.id);
                      setConfirmDelete(null);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="modal-confirm-btn"
                    onClick={() => setConfirmDelete(null)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default DayPage;
