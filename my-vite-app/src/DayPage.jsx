import { useNavigate, useParams } from 'react-router-dom';
import './DayPage.css';

const MOCK_DAYS = {
    monday: { name: 'Monday', date: 'February 23' },
    tuesday: { name: 'Tuesday', date: 'February 24' },
    wednesday: { name: 'Wednesday', date: 'February 25' },
    thursday: { name: 'Thursday', date: 'February 26' },
    friday: { name: 'Friday', date: 'February 27' },
    saturday: { name: 'Saturday', date: 'February 28' },
    sunday: { name: 'Sunday', date: 'March 1' },
};

function DayPage() {
  const navigate = useNavigate();
  const { dayId } = useParams();
  const dayData = MOCK_DAYS[dayId] || MOCK_DAYS.monday;

  const mockMeals = [
    { id: 1, time: '8:30AM', location: 'Breakfast at The Elm', cost: '7.80 points' },
    { id: 2, time: '2:30PM', location: 'Lunch at Silliman', cost: '1 Swipe' },
  ];

  return (
    <div className="day-page-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <button className="back-btn" style={{ left: 'auto', right: 40 }} onClick={() => navigate('/meals')}>
        Week View
      </button>

      <header className="meals-header">
        <h1>{dayData.name}’s Meals</h1>
        <p className="date-range">{dayData.date}</p>
      </header>

      <div className="day-content-layout">
        <aside className="day-total-card">
          <h3>Day Total</h3>
          <div className="day-stat">
            <span className="day-stat-value">1</span>
            <span className="day-stat-label">swipes left</span>
          </div>
          <div className="day-stat">
            <span className="day-stat-value">2.20</span>
            <span className="day-stat-label">points left</span>
          </div>
          <div className="day-stat">
            <span className="day-stat-value">$0.00</span>
            <span className="day-stat-label">dollars left</span>
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
            {mockMeals.map((meal) => (
              <div key={meal.id} className="meal-item-row">
                <div className="meal-card-info">
                  <span className="meal-time">{meal.time}</span>
                  <span className="meal-desc">{meal.location}</span>
                  <span className="meal-cost-badge">{meal.cost}</span>
                </div>
                <div className="meal-actions">
                  <button className="icon-btn delete-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                  </button>
                  <button className="icon-btn edit-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="add-meal-btn">
            + Add a Meal
          </button>
        </main>
      </div>
    </div>
  );
}

export default DayPage;