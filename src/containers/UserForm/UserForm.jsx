import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";
import Avatar from "../../components/Avatar";

import "./UserForm.scss";

const UserForm = () => {
  const [name, setName] = useState("Ada Lovelace");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("adalovelace");
  const [email, setEmail] = useState("adalovelace@gmail.com");
  const [submit, setSubmit] = useState(false);

  const handleAddUser = (event) => null;

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <Avatar className="user__thumb" avatar={avatar} />

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Maria Beasley"
              onChange={(event) => setName(event.target.value)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: maria_beasley"
              onChange={(event) => setUsername(event.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: mariabeasley@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Url da Imagem de Perfil</label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => setAvatar(event.target.value)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
