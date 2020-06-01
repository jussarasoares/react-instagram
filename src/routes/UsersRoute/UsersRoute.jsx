import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import { findUsers } from "../../resources/users";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    findUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
