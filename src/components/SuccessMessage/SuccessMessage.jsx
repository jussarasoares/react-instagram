import React from "react";

import { Link } from "react-router-dom";

import "./SuccessMessage.scss";
import { ReactComponent as SuccessAnimation } from "../../assets/img/success-animation.svg";

const SuccessMessage = () => (
  <div className="success-message" data-testid="success-message">
    <SuccessAnimation className="successAnimation animated" />

    <h2 className="success-message__title">Usuário Cadastrado!</h2>

    <div className="success-message__content">
      <p>
        Visite a página <Link to="/users">users</Link> para visualizar o novo
        usuário
      </p>
    </div>
  </div>
);

export default SuccessMessage;
