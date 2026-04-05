import { useNavigate } from 'react-router-dom';
import { useBudget } from './BudgetContext';
import './SemesterBudget.css';

/// Code below generated using Claude Code 

function BarRow({ label, greenPct, greenLabel, redLabel }) {
  const redPct = 100 - greenPct;
  return (
    <div className="bar-section">
      <span className="bar-section-label">{label}</span>
      <div className="bar-track">
        <div className="bar-segment-green" style={{ width: `${greenPct}%` }} />
        <div className="bar-segment-red"   style={{ width: `${redPct}%` }} />
      </div>
      <div className="bar-legend">
        <span className="legend-item">
          <span className="legend-dot dot-green" />
          {greenLabel}
          <span className="legend-pct">{greenPct}%</span>
        </span>
        <span className="legend-item">
          <span className="legend-dot dot-red" />
          {redLabel}
          <span className="legend-pct">{redPct}%</span>
        </span>
      </div>
    </div>
  );
}

export default function SemesterBudgetPage() {
  const navigate = useNavigate();
  const { diningPoints, mealSwipes, semesterDays } = useBudget();

  const dpPct  = Math.round((diningPoints.remaining / diningPoints.total) * 100);
  const swPct  = Math.round((mealSwipes.remaining   / mealSwipes.total)   * 100);
  const dayPct = Math.round(((semesterDays.total - semesterDays.completed) / semesterDays.total) * 100);

  return (
    <div className="semester-container">
      <nav className="semester-nav">
        <button className="nav-btn" onClick={() => navigate('/')}>Back to Home</button>
        <h1>Semester Overview</h1>
        <button className="nav-btn" onClick={() => navigate('/budget')}>Budget Analytics Menu</button>
      </nav>

      <div className="semester-outer-card">
        <div className="semester-summary-card">
          <p className="summary-label">Semester Budget</p>
          <p className="summary-value">
            {diningPoints.remaining}/{diningPoints.total} Dining Points Left
            &nbsp;|&nbsp;
            {mealSwipes.remaining}/{mealSwipes.total} Meal Swipes Remaining
          </p>
        </div>

        <div className="semester-charts-card">
          <BarRow
            label="Total Remaining Dining Points This Semester"
            greenPct={dpPct}
            greenLabel="Remaining dining points"
            redLabel="Spent dining points"
          />
          <BarRow
            label="Total Remaining Meal Swipes This Semester"
            greenPct={swPct}
            greenLabel="Remaining meal swipes"
            redLabel="Used meal swipes"
          />
          <BarRow
            label="Total Remaining Days This Semester"
            greenPct={dayPct}
            greenLabel="Remaining semester days"
            redLabel="Completed semester days"
          />
        </div>
      </div>
    </div>
  );
}
