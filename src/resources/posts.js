export function findPosts(userId) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}/posts`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getPost(userId, postId) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}/posts/${postId}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function createPost(userId, postData) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }).then((response) => response.json());
}

export function updatePost(userId, postId, postData) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }).then((response) => response.json());
}

export function deletePost(userId, postId) {
  return fetch(`${process.env.REACT_APP_API}/users/${userId}/posts/${postId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
