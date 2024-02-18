import { useRouteError, Link, useNavigate } from "react-router-dom";

// css
import "./error.css";

// library
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-message">
        <h2>Uh oh! Nós temos um problema</h2>
        <p>{error.message || error.statusText}</p>
      </div>
      <div className="error-btn">
        <button
          className="btn-goBack"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowUturnLeftIcon />
          <span>Voltar</span>
        </button>
        <Link to="/" className="error-btn-dark">
          <HomeIcon />
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
