import React from "react";

import { Link } from "react-router-dom";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";

const User = ({ infoUser }) => {
  const { avatar, name, username } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${username}`} className="user">
          <div className="user__thumb">
            {avatar ? (
              <img src={avatar} alt={name} />
            ) : (
              <img src={profilePlaceholder} alt="" />
            )}
          </div>

          <div className="user__name">{name}</div>
        </Link>
      </header>
    </article>
  );
};

export default User;
