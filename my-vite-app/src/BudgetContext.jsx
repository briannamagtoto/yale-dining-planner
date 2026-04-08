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
    mealSwipesSpent: 0,
  });

  return (
    <BudgetContext.Provider value={{
      diningPoints, setDiningPoints,
      mealSwipes, setMealSwipes,
      semesterDays, setSemesterDays,
      weeklyBudget, setWeeklyBudget,
    }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  return useContext(BudgetContext);
}
