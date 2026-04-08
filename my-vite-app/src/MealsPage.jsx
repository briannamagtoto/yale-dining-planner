import { useNavigate } from 'react-router-dom';
import './MealsPage.css';

function MealsPage() {
  const navigate = useNavigate();

  const days = [
    { name: 'Monday', date: 'Feb 23', meals: 2 },
    { name: 'Tuesday', date: 'Feb 24', meals: 2 },
    { name: 'Wednesday', date: 'Feb 25', meals: 2 },
    { name: 'Thursday', date: 'Feb 26', meals: 2 },
    { name: 'Friday', date: 'Feb 27', meals: 2 },
    { name: 'Saturday', date: 'Feb 28', meals: 2 },
    { name: 'Sunday', date: 'March 1', meals: 2 },
  ];

  return (
    <div className="meals-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>

      <aside className="week-total-card">
        <h3>Week Total ⓘ</h3>
        <div className="stat">
          <span className="stat-value">14</span>
          <span className="stat-label">swipes left</span>
        </div>
        <div className="stat">
          <span className="stat-value">62.20</span>
          <span className="stat-label">points left</span>
        </div>
        <div className="stat">
          <span className="stat-value">$0.00</span>
          <span className="stat-label">dollars left</span>
        </div>
      </aside>

      <main className="calendar-view">
        <header className="meals-header">
          <h1>Meals this Week ⓘ</h1>
          <p className="date-range">February 23 - March 1</p>
        </header>

        <div className="days-list">
          {days.map((day) => (
            <button key={day.name} className="day-row-btn">
              <div className="day-info">
                <span className="day-name">{day.name}</span>
                <span className="day-date">{day.date}</span>
              </div>
              <span className="meal-count">{day.meals} meals &gt;</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MealsPage;
