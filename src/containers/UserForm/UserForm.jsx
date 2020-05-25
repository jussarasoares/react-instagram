import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";

const UserForm = () => {
  const [name, setName] = useState("Ada Lovelace");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("adalovelace");
  const [email, setEmail] = useState("adalovelace@gmail.com");
  const [submit, setSubmit] = useState(false);

  const handleSetName = (event) => {
    const { value } = event.target;

    setName(value);
  };

  const handleSetAvatar = (event) => {
    const { value } = event.target;

    setAvatar(value);
  };

  const handleSetUserName = (event) => {
    const { value } = event.target;

    setUsername(value);
  };

  const handleSetEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleAddUser = (event) => null;

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img src={profilePlaceholder} alt="" />
                )}
              </div>

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
              onChange={(event) => handleSetName(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: maria_beasley"
              onChange={(event) => handleSetUserName(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: mariabeasley@gmail.com"
              onChange={(event) => handleSetEmail(event)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => handleSetAvatar(event)}
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
