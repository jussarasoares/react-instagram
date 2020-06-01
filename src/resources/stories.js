export function findStories() {
  return fetch(`${process.env.REACT_APP_API}/stories`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getStory(storyId) {
  return fetch(`${process.env.REACT_APP_API}/stories/${storyId}`, {
    method: "GET",
  }).then((response) => response.json());
}
