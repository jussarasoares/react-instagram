import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
