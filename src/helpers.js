import { v4 as uuidv4 } from "uuid";

export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

//Local storage
export const fetchData = (key) => {
  return localStorage.getItem(key);
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  const updatedBudgets = [...existingBudgets, newItem];

  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createAt: Date.now(),
    amount: -amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  const updatedExpense = [...existingExpenses, newItem];

  localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpense, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  clearLocalStorage();
  return localStorage.removeItem(key);
};

// clear localStorage
const clearLocalStorage = () => {
  localStorage.clear();
};
