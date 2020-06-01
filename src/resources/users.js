export function findUsers(search) {
  let url = `${process.env.REACT_APP_API}/users`;
  if (search) {
    url += `?search=${search}`;
  }

  return fetch(url, {
    method: "GET",
  }).then((response) => response.json());
}

export function getUser(userId) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function createUser(userData) {
  return fetch(`${process.env.REACT_APP_API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
}

export function updateUser(userId, userData) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
}

export function deleteUser(userId) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
