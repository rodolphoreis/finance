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
  console.log("createBudget foi chamada!");
  console.log("Criando novo orçamento:", name, amount);
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  const updatedBudgets = [...existingBudgets, newItem];

  console.log("Orçamentos existentes:", existingBudgets);
  console.log("Novos orçamentos:", updatedBudgets);

  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
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
