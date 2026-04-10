// Code below generated using Claude Code
import { createContext, useContext, useState, useEffect, useRef } from 'react';

const BudgetContext = createContext();

function calcTotals(days) {
  let diningPointsSpent = 0;
  let mealSwipesSpent = 0;
  let outOfPocketSpent = 0;

  Object.values(days).forEach(meals => {
    meals.forEach(meal => {
      const cost = meal.cost;
      if (/points?/i.test(cost)) {
        const match = cost.match(/([\d.]+)\s*points?/i);
        if (match) diningPointsSpent += parseFloat(match[1]);
      } else if (/swipe/i.test(cost)) {
        mealSwipesSpent += 1;
      } else if (cost.startsWith('$')) {
        const match = cost.match(/\$([\d.]+)/);
        if (match) outOfPocketSpent += parseFloat(match[1]);
      }
    });
  });

  return { diningPointsSpent, mealSwipesSpent, outOfPocketSpent };
}

export function BudgetProvider({ children }) {
  const [diningPoints, setDiningPoints] = useState({ total: 300, remaining: 129 });
  const [mealSwipes, setMealSwipes] = useState({ total: 150, remaining: 100 });
  const [semesterDays, setSemesterDays] = useState({ total: 100, completed: 48 });
  const [weeklyBudget, setWeeklyBudget] = useState({
    diningPointsBudget: 40,
    diningPointsSpent: 8,
    mealSwipesBudget: 14,
    mealSwipesSpent: 1,
    outOfPocketSpent: 0,
  });
  const [mealsByDay, setMealsByDay] = useState({
    monday: [
      { id: 1, time: '8:30AM', location: 'Breakfast at The Elm', cost: '8 points' },
      { id: 2, time: '2:30PM', location: 'Lunch at Silliman', cost: '1 Swipe' },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  // Tracks the previous week totals so we can apply deltas to semester remaining
  const prevTotalsRef = useRef(null);

  useEffect(() => {
    const totals = calcTotals(mealsByDay);

    if (prevTotalsRef.current !== null) {
      const deltaPoints = totals.diningPointsSpent - prevTotalsRef.current.diningPointsSpent;
      const deltaSwipes = totals.mealSwipesSpent - prevTotalsRef.current.mealSwipesSpent;
      if (deltaPoints !== 0)
        setDiningPoints(prev => ({ ...prev, remaining: Math.max(0, prev.remaining - deltaPoints) }));
      if (deltaSwipes !== 0)
        setMealSwipes(prev => ({ ...prev, remaining: Math.max(0, prev.remaining - deltaSwipes) }));
    }

    prevTotalsRef.current = totals;
    setWeeklyBudget(prev => ({ ...prev, ...totals }));
  }, [mealsByDay]);

  function addMeal(dayId, meal) {
    setMealsByDay(prev => {
      const dayMeals = prev[dayId] ?? [];
      const maxId = Object.values(prev).flat().reduce((max, m) => Math.max(max, m.id), 0);
      const newMeal = { ...meal, id: maxId + 1 };
      return { ...prev, [dayId]: [...dayMeals, newMeal] };
    });
  }

  function editMeal(dayId, mealId, updatedMeal) {
    setMealsByDay(prev => ({
      ...prev,
      [dayId]: prev[dayId].map(m => m.id === mealId ? { ...m, ...updatedMeal } : m),
    }));
  }

  function deleteMeal(dayId, mealId) {
    setMealsByDay(prev => ({
      ...prev,
      [dayId]: prev[dayId].filter(m => m.id !== mealId),
    }));
  }

  return (
    <BudgetContext.Provider value={{
      diningPoints, setDiningPoints,
      mealSwipes, setMealSwipes,
      semesterDays, setSemesterDays,
      weeklyBudget, setWeeklyBudget,
      mealsByDay, setMealsByDay,
      addMeal, editMeal, deleteMeal,
    }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  return useContext(BudgetContext);
}
