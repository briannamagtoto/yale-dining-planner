/* Code below generated using Claude Code */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { useBudget } from './BudgetContext';
import './WeeklyBudget.css';

function DonutChart({ remaining, spent, remainingLabel, spentLabel }) {
  const total = remaining + spent;
  const remainPct = Math.round((remaining / total) * 100);
  const spentPct  = 100 - remainPct;

  const data = [
    { name: spentLabel,     value: spent },
    { name: remainingLabel, value: remaining },
  ];

  return (
    <>
      <PieChart width={200} height={180}>
        <Pie
          data={data}
          cx={100}
          cy={90}
          innerRadius={55}
          outerRadius={85}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          strokeWidth={0}
        >
          <Cell fill="#8b1a3a" />
          <Cell fill="#4a8c6f" />
        </Pie>
      </PieChart>

      <div className="donut-legend">
        <div className="donut-legend-item">
          <div className="donut-legend-left">
            <span className="donut-dot dot-red" />
            <span>{spentLabel}</span>
          </div>
          <span>{spentPct}%</span>
        </div>
        <div className="donut-legend-item">
          <div className="donut-legend-left">
            <span className="donut-dot dot-green" />
            <span>{remainingLabel}</span>
          </div>
          <span>{remainPct}%</span>
        </div>
      </div>
    </>
  );
}

export default function WeeklyBudgetPage() {
  const navigate = useNavigate();
  const { weeklyBudget, setWeeklyBudget } = useBudget();
  const [adjustValue, setAdjustValue] = useState('');

  const { diningPointsBudget, diningPointsSpent, mealSwipesBudget, mealSwipesSpent } = weeklyBudget;

  const diningPointsRemaining = diningPointsBudget - diningPointsSpent;
  const mealSwipesRemaining   = mealSwipesBudget - mealSwipesSpent;

  const dayOfWeek = 1; // Week starts on Monday

  const totalDaysInWeek = 7;



  // Assuming week ends on Sunday
  //const daysLeft = 7 - dayOfWeek;

  const budgetProgress = (diningPointsBudget - diningPointsRemaining) / diningPointsBudget;

  const daysCompleted = dayOfWeek;
  const weekProgress = daysCompleted / totalDaysInWeek;


  const tolerance = 0.1; // 10% margin
  const onTrack = Math.abs(weekProgress - budgetProgress) <= tolerance;
  const lowSpending = budgetProgress < weekProgress - tolerance;
  const highSpending = budgetProgress > weekProgress + tolerance;


  const spendingMessage = highSpending
    ? 'Overspending for this Week'
    : lowSpending
      ? 'Underspending for this Week'
      : 'On Track for this Week';

  const adviceMessage = highSpending
    ? 'Consider spending less'
    : lowSpending
      ? 'Consider spending more'
      : 'Good Job!';

  function handleIncrease() {
    const val = parseFloat(adjustValue);
    if (!isNaN(val) && val > 0) {
      setWeeklyBudget(prev => ({ ...prev, diningPointsBudget: prev.diningPointsBudget + val }));
      setAdjustValue('');
    }
  }

  function handleDecrease() {
    const val = parseFloat(adjustValue);
    if (!isNaN(val) && val > 0) {
      setWeeklyBudget(prev => ({ ...prev, diningPointsBudget: Math.max(0, prev.diningPointsBudget - val) }));
      setAdjustValue('');
    }
  }

  function handleIncreaseMealSwipes() {
  setWeeklyBudget(prev => ({ ...prev, mealSwipesBudget: prev.mealSwipesBudget + 1 }));
  }

  function handleDecreaseMealSwipes() {
    setWeeklyBudget(prev => ({ ...prev, mealSwipesBudget: Math.max(1, prev.mealSwipesBudget - 1) }));
  }

  return (
    <div className="weekly-container">
      <nav className="weekly-nav">
        <button className="weekly-nav-btn" onClick={() => navigate('/')}>Back to Home</button>
        <h1>Budget Analytics</h1>
        <button className="weekly-nav-btn" onClick={() => navigate('/budget')}>Budget Analytics Menu</button>
      </nav>

      {/* Donut Charts */}
      <div className="weekly-charts-card">
        <p className="weekly-charts-title">Weekly Budget Overview</p>
        <div className="weekly-charts-row">
          <div className="donut-card">
            <p className="donut-card-title">Remaining Weekly Meal Swipes</p>
            <DonutChart
              remaining={mealSwipesRemaining}
              spent={mealSwipesSpent}
              remainingLabel="Swipes remaining this week"
              spentLabel="Swipes spent this week"
            />
          </div>
          <div className="donut-card">
            <p className="donut-card-title">Remaining Weekly Dining Points</p>
            <DonutChart
              remaining={Math.max(0, diningPointsRemaining)}
              spent={diningPointsSpent}
              remainingLabel="Points remaining this week"
              spentLabel="Points spent this week"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="weekly-bottom-row">
        <div className="change-budget-card">
          <h3>Change Budget by Value</h3>
          <input
            type="number"
            placeholder="Value"
            value={adjustValue}
            onChange={e => setAdjustValue(e.target.value)}
          />
          <div className="budget-btn-row">
            <button className="budget-action-btn" onClick={handleIncrease}>
              Increase This Week's Dining Point Budget
            </button>
            <button className="budget-action-btn" onClick={handleDecrease}>
              Decrease This Week's Dining Point Budget
            </button>
          </div>
        </div>

  <div className="weekly-summary-card">
    <h3>Weekly Budget</h3>
    <p className="weekly-summary-value">
      {diningPointsBudget} Dining Points | {mealSwipesBudget} Meal Swipes
    </p>
    <div className="budget-btn-row">
      <button className="budget-action-btn" onClick={handleIncreaseMealSwipes}>
        Increase Meal Swipe
      </button>
      <button className="budget-action-btn" onClick={handleDecreaseMealSwipes}>
        Decrease Meal Swipe
      </button>
    </div>
  </div>
      </div>

      {/* Status */}
      <div className="weekly-bottom-row">
        <div className="weekly-status-card">
          <h3>Points Overview</h3>
          <div className="stat-row">
            <span className="stat-label">Spent</span>
            <span className="stat-value">{diningPointsBudget - diningPointsRemaining}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Remaining</span>
            <span className="stat-value">{diningPointsRemaining}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Days Left</span>
            <span className="stat-value">{totalDaysInWeek - dayOfWeek}</span>
          </div>
        </div>

        <div className="weekly-status-card">
          <h3>Meal Swipes Overview</h3>
          <div className="stat-row">
            <span className="stat-label">Spent</span>
            <span className="stat-value">{mealSwipesBudget - mealSwipesRemaining}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Remaining</span>
            <span className="stat-value">{mealSwipesRemaining}</span>
          </div>
        </div>

        <div className="weekly-status-card">
          <h3>Spending Status</h3>
          <div className="stat-row">
            <span className="stat-label">Status</span>
            <span className="stat-advice">{spendingMessage}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Advice</span>
            <span className="stat-advice">{adviceMessage}</span>
          </div>
        </div>
      </div>      
    </div>
  );
}
