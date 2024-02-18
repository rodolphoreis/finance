// css
import "./dashboard.css";

//react router dom imports
import { useLoaderData } from "react-router-dom";

//helpers function
import { createBudget } from "../helpers";
import { fetchData } from "../helpers";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

//Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  console.log("dashboardAction foi chamada!");
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
      console.log("Valor de name:", values.newBudget);
      console.log("Valor de amount:", values.newBudgetAmount);
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });

      return toast.success("Orçamento criado!");
    } catch (e) {
      throw new Error("Ocorreu um problema ao criar seu orçamento.");
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
            {/* budgets ? ():() */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
