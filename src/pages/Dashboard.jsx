//react router dom imports
import { useLoaderData } from "react-router-dom";

//helpers function
import { fetchData } from "../helpers";

//Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
