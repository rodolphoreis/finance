import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

import "./intro.css";
const Intro = () => {
  return (
    <div className="Intro">
      <div>
        <h1>
          Assuma o Controle de <span className="Intro-span">Seu Dinheiro</span>
        </h1>
        <p>
          O orçamento pessoal é o segredo da liberdade financeira. Comece sua
          jornada hoje.
        </p>
        <Form method="post" className="container">
          <input
            type="text"
            name="userName"
            required
            placeholder="Qual é o seu nome?"
            autoComplete="given-name"
            className="custom-input"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="Intro-btn-dark">
            <span>Criar uma Conta</span>
            <UserPlusIcon />
          </button>
        </Form>
      </div>
      <div className="image-container">
        <img src="/finance.webp" alt="img-money" className="image" />
      </div>
    </div>
  );
};

export default Intro;
