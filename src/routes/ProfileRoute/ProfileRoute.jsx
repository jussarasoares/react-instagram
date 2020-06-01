import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";
import { findUsers } from "../../resources/users";
import { findPosts } from "../../resources/posts";

const ProfileRoute = () => {
  const { username } = useParams();
  const [id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    findUsers(username).then((data) => {
      setAvatar(data[0].avatar);
      setEmail(data[0].email);
      setName(data[0].name);
      setUserName(data[0].username);
      setUserId(data[0].id);
    });
  }, [username]);

  useEffect(() => {
    findPosts(id).then((data) => {
      setUserPosts(data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        username={userName}
        email={email}
      />

      {isLoading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;
