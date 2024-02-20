// rrd imports
import { useLoaderData } from "react-router-dom";

// library import
import { toast } from "react-toastify";

// component imports
import Table from "../components/Table";

// helpers
import { deleteItem, fetchData } from "../helpers";

// loader
export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Deletar Despesa!");
    } catch (e) {
      throw new Error("Tivemos um problema ao deletar sua despesa.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>Todas as Despesas</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Despesas Recentes <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>Sem despesas para mostrar</p>
      )}
    </div>
  );
};

export default ExpensesPage;
