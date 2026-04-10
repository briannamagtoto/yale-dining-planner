import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useBudget } from './BudgetContext';
import './AddMealPage.css';

const MOCK_DAYS = {
  monday:    { name: 'Monday',    date: 'February 23' },
  tuesday:   { name: 'Tuesday',   date: 'February 24' },
  wednesday: { name: 'Wednesday', date: 'February 25' },
  thursday:  { name: 'Thursday',  date: 'February 26' },
  friday:    { name: 'Friday',    date: 'February 27' },
  saturday:  { name: 'Saturday',  date: 'February 28' },
  sunday:    { name: 'Sunday',    date: 'March 1' },
};

function parseCost(cost) {
  if (!cost) return { costType: null, amount: '' };
  if (/points?/i.test(cost)) {
    const match = cost.match(/([\d.]+)/);
    return { costType: 'points', amount: match ? match[1] : '' };
  }
  if (/swipe/i.test(cost)) {
    return { costType: 'swipe', amount: '' };
  }
  if (cost.startsWith('$')) {
    const match = cost.match(/\$([\d.]+)/);
    return { costType: 'pocket', amount: match ? match[1] : '' };
  }
  return { costType: null, amount: '' };
}

function EditMealPage() {
  const navigate = useNavigate();
  const { dayId, mealId } = useParams();
  const { state } = useLocation();
  const { editMeal } = useBudget();
  const dayData = MOCK_DAYS[dayId] || MOCK_DAYS.monday;

  const meal = state?.meal;
  const parsed = parseCost(meal?.cost);

  const [time, setTime] = useState(meal?.time ?? '');
  const [location, setLocation] = useState(meal?.location ?? '');
  const [costType, setCostType] = useState(parsed.costType);
  const [amount, setAmount] = useState(parsed.amount);
  const [error, setError] = useState('');

  if (!meal) {
    navigate(`/day-meals/${dayId}`);
    return null;
  }

  function handleSave() {
    if (!time.trim() || !location.trim() || !costType) {
      setError('Please fill in all fields and select a cost type.');
      return;
    }
    let cost;
    if (costType === 'points') cost = `${amount || '0'} points`;
    else if (costType === 'swipe') cost = '1 Swipe';
    else cost = `$${amount || '0'}`;

    editMeal(dayId, Number(mealId), { time: time.trim(), location: location.trim(), cost });
    navigate(`/day-meals/${dayId}`);
  }

  function selectCostType(type) {
    setCostType(type);
    setAmount('');
    setError('');
  }

  return (
    <div className="meal-form-page">
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      <button className="back-btn meal-form-right-btn" onClick={() => navigate(`/day-meals/${dayId}`)}>Day View</button>

      <header className="meal-form-header">
        <h1>Edit a Meal</h1>
      </header>

      <div className="meal-form-card">
        <h2 className="meal-form-day-label">{dayData.name} {dayData.date}</h2>
        <p className="meal-form-section-label">+ ADD A MEAL</p>

        <div className="meal-form-inner-card">
          <div className="meal-form-field">
            <label className="meal-form-label">TIME</label>
            <input
              type="text"
              className="meal-form-input"
              placeholder="8:30 PM"
              value={time}
              onChange={e => { setTime(e.target.value); setError(''); }}
            />
          </div>

          <div className="meal-form-field">
            <label className="meal-form-label">WHAT DID YOU EAT?</label>
            <input
              type="text"
              className="meal-form-input"
              placeholder="Dinner at Branford College"
              value={location}
              onChange={e => { setLocation(e.target.value); setError(''); }}
            />
          </div>

          <div className="meal-form-field">
            <label className="meal-form-label">COST</label>
            <div className="cost-toggle-group">
              <button
                className={`cost-toggle-btn${costType === 'points' ? ' cost-toggle-selected' : ''}`}
                onClick={() => selectCostType('points')}
              >
                Dining Points
              </button>
              <button
                className={`cost-toggle-btn${costType === 'swipe' ? ' cost-toggle-selected' : ''}`}
                onClick={() => selectCostType('swipe')}
              >
                Meal Swipe
              </button>
              <button
                className={`cost-toggle-btn${costType === 'pocket' ? ' cost-toggle-selected' : ''}`}
                onClick={() => selectCostType('pocket')}
              >
                Out of Pocket Spending
              </button>
            </div>
            {costType === 'points' && (
              <div className="cost-amount-row">
                <span className="cost-amount-prefix">$</span>
                <input
                  type="number"
                  className="meal-form-input cost-amount-input"
                  placeholder="0.00"
                  min="0"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>
            )}
            {costType === 'pocket' && (
              <div className="cost-amount-row">
                <span className="cost-amount-prefix">$</span>
                <input
                  type="number"
                  className="meal-form-input cost-amount-input"
                  placeholder="0.00"
                  min="0"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>
            )}
          </div>

          {error && <p className="meal-form-error">{error}</p>}
        </div>

        <div className="meal-form-actions">
          <button className="meal-form-action-btn" onClick={() => navigate(`/day-meals/${dayId}`)}>
            Cancel
          </button>
          <button className="meal-form-action-btn" onClick={handleSave}>
            Save meal
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMealPage;
