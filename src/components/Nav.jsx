// react router dom imports
import { Form, NavLink } from "react-router-dom";

// Nav css
import "./nav.css";

// Library
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logo from "../assets/logo.png";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Logomark" />
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Excluir usuário e todos os dados?"))
              e.preventDefault();
          }}
        >
          <button type="submit" className="btn-delete">
            <span>Deletar usuário</span>
            <TrashIcon className="trash-icon" />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
