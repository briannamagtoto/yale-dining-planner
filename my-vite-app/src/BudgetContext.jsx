// Code below generated using Claude Code
import { createContext, useContext, useState } from 'react';

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [diningPoints, setDiningPoints] = useState({ total: 300, remaining: 129 });
  const [mealSwipes, setMealSwipes] = useState({ total: 150, remaining: 100 });
  const [semesterDays, setSemesterDays] = useState({ total: 100, completed: 48 });
  const [weeklyBudget, setWeeklyBudget] = useState({
    diningPointsBudget: 40,
    diningPointsSpent: 16,
    mealSwipesBudget: 14,
    mealSwipesSpent: 1,
  });
  const [mealsByDay, setMealsByDay] = useState({
    monday: [
      { id: 1, time: '8:30AM', location: 'Breakfast at The Elm', cost: '16 points' },
      { id: 2, time: '2:30PM', location: 'Lunch at Silliman', cost: '1 Swipe' },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  return (
    <BudgetContext.Provider value={{
      diningPoints, setDiningPoints,
      mealSwipes, setMealSwipes,
      semesterDays, setSemesterDays,
      weeklyBudget, setWeeklyBudget,
      mealsByDay, setMealsByDay,
    }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  return useContext(BudgetContext);
}
