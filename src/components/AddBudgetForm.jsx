// react router dom imports
import { Form } from "react-router-dom";

// react
import React, { useState } from "react";

import { createBudget } from "../helpers";

//css
import "./addbudgetForm.css";

// library imports
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const [newBudget, setNewBudget] = useState("");
  const [newBudgetAmount, setNewBudgetAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createBudget({ name: newBudget, amount: newBudgetAmount });

      setNewBudget("");
      setNewBudgetAmount("");
    } catch (error) {
      console.error("Erro ao criar o orçamento:", error);
    }
  };

  return (
    <div className="AddBudget-form">
      <h2 className="h3">Criar Orçamento</h2>
      <Form method="post" className="add-form" onSubmit={handleSubmit}>
        <div className="grid-xs">
          <label htmlFor="newBudget"> Orçamento</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            value={newBudget}
            placeholder=" Salário"
            onChange={(e) => setNewBudget(e.target.value)}
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
            value={newBudgetAmount}
            placeholder="R$ 350"
            onChange={(e) => setNewBudgetAmount(e.target.value)}
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="addBudget-btn">
          <span>Criar Orçamento</span>
          <CurrencyEuroIcon />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
