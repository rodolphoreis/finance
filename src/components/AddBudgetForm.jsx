// react router dom imports
import { Form } from "react-router-dom";

//css
import "./addbudgetForm.css";

// library imports
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  return (
    <div className="AddBudget-form">
      <h2 className="h3">Criar Orçamento</h2>
      <Form method="post" className="add-form">
        <div className="grid-xs">
          <label htmlFor="newBudget"> Orçamento</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder=" Salário"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Quantia</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="R$ 350"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="addBudget-btn">
          <span>Criar Orçamento</span>
          <CurrencyEuroIcon />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
