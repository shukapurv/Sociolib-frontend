import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import User from "@components/Users/user";

const MyFriends = ({ token, username }) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .post(
        `https://sociolib-api.herokuapp.com/friends/all/`,
        { username },
        { headers: { Authorization: `Token ${token}` } },
      )
      .then((res) => {
        console.log(res);
        setFriends(res.data.friends);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div>
        <ul className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          {friends.map((a) => (
            <li key={a.id}>
              <User {...a} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyFriends;
