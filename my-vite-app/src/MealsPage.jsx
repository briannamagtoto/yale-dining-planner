import { useNavigate } from 'react-router-dom';
import { useBudget } from './BudgetContext';
import './MealsPage.css';

function MealsPage() {
  const navigate = useNavigate();
  const { weeklyBudget, mealsByDay } = useBudget();
  const diningPointsLeft = weeklyBudget.diningPointsBudget - weeklyBudget.diningPointsSpent;
  const mealSwipesLeft = weeklyBudget.mealSwipesBudget - weeklyBudget.mealSwipesSpent;

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
        <h3>Week Total</h3>
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
          <h1>Meals this Week</h1>
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
    </div>
  );
}

export default MealsPage;
