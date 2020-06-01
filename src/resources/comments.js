export function findComments(userId, postId) {
  return fetch(
    `${process.env.REACT_APP_API}/users/${userId}/posts/${postId}/comments`,
    { method: "GET" }
  ).then((response) => response.json());
}

export function getComment(userId, postId, commentId) {
  return fetch(
    `${process.env.REACT_APP_API}/users/${userId}/posts/${postId}/comments/${commentId}`,
    { method: "GET" }
  ).then((response) => response.json());
}

export function createComment(userId, postId, commentData) {
  return fetch(
    `${process.env.REACT_APP_API}/users/${userId}/posts/${postId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }
  ).then((response) => response.json());
}

export function updateComment(userId, postId, commentId, commentData) {
  return fetch(
    `${process.env.REACT_APP_API}/users/${userId}/posts/${postId}/comments/${commentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }
  ).then((response) => response.json());
}

export function deleteComment(userId, postId, commentId) {
  return fetch(
    `${process.env.REACT_APP_API}/users/${userId}/posts/${postId}/comments/${commentId}`,
    { method: "DELETE" }
  ).then((response) => response.json());
}
