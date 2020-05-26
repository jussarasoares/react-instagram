import React from "react";

import { Link } from "react-router-dom";
import Avatar from "../Avatar";

const User = ({ infoUser }) => {
  const { avatar, name, username } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${username}`} className="user">
          <Avatar className="user__thumb" avatar={avatar} />

          <div className="user__name">{name}</div>
        </Link>
      </header>
    </article>
  );
};

export default User;
