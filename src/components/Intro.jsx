import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Assuma o Controle de <span className="accent">Seu Dinheiro</span>
        </h1>
        <p>
          O orçamento pessoal é o segredo da liberdade financeira. Comece sua
          jornada hoje.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Qual é o seu nome?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Criar uma Conta</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Pessoa com dinheiro" width={600} />
    </div>
  );
};
export default Intro;
