//react router dom imports
import { useLoaderData } from "react-router-dom";

//helpers function
import { fetchData } from "../helpers";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";

//Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", formData.userName);
    return toast.success(`Seja Bem-Vindo, ${formData.userName}`);
  } catch (e) {
    throw new Error("Ocorreu um problema ao criar sua conta.");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
