//react router dom imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName",
  });
  toast.success("Você excluiu sua conta!");
  // return redirect
  return redirect("/");
}