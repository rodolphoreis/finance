import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
