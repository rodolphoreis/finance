// css
import "./dashboard.css";

//react router dom imports
import { useLoaderData } from "react-router-dom";

//helpers function
import { createBudget, createExpense, waait } from "../helpers";
import { fetchData } from "../helpers";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

//Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  console.log("Novo orçamento:");
  console.log("Nome:", values.newBudget);
  console.log("Quantia:", values.newBudgetAmount);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", values.userName);
      return toast.success(`Seja Bem-Vindo, ${values.userName}`);
    } catch (e) {
      throw new Error("Ocorreu um problema ao criar sua conta.");
    }
  }
  if (_action === "createbudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
        budgetId: values.newExpenseBudget,
      });

      return toast.success("Orçamento criado!");
    } catch (e) {
      throw new Error("Ocorreu um problema ao criar seu orçamento.");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
      });

      return toast.success(
        `Despesa criada no valor de R$ ${values.newExpense}!`
      );
    } catch (e) {
      throw new Error("Ocorreu um problema ao criar sua despesa.");
    }
  }
  return null;
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Bem-Vindo, <span className="dashboard-name">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <h1>olaaa</h1>
                  <AddExpenseForm budgets={budgets} />
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>O orçamento pessoal é o segredo da liberdade financeira.</p>
                <p>Crie um orçamento para começar!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
