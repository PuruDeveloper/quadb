import React, { useContext } from "react";

import { UserContext } from "../App";

function Home() {
  const { state, dispatch } = useContext(UserContext);
  const logOut = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_USER",
    });
    localStorage.clear();
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={(e) => logOut(e)}>LogOut</button>
    </div>
  );
}

export default Home;
