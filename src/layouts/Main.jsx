//react router dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
/* import wave from "../assets/wave.png"; */

// Components
import Nav from "../components/Nav";

//helpers function
import { fetchData } from "../helpers";

//Loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      {/* <img src={wave} alt="img-footer" /> */}
    </div>
  );
};

export default Main;
