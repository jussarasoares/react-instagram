import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";
import { findUsers } from "../../resources/users";
import { findPosts } from "../../resources/posts";
import { findStories } from "../../resources/stories";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) =>
    users.find((user) => postUserId === user.id);

  useEffect(() => {
    findUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }
    findPosts(users[usersFetched].id).then((data) => {
      setPosts([...posts, ...data]);
      setUsersFetched(usersFetched + 1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, usersFetched]);

  useEffect(() => {
    findStories().then((data) => {
      setStories(data);
    });
  }, []);

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserPostById} />
      )}

      {users.length !== usersFetched ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;
