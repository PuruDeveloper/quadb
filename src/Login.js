import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import "./Login.css";

function Login() {
  const { state, dispatch } = useContext(UserContext);
  let [manualUsername, setManualUsername] = useState("");
  let [manualPassword, setManualPassword] = useState("");

  const changeUsername = (e) => {
    e.preventDefault();
    setManualUsername(`${e.target.value}`);
  };

  const changePassword = (e) => {
    e.preventDefault();
    setManualPassword(`${e.target.value}`);
  };

  const manualSignIn = async (e) => {
    e.preventDefault();
    if (manualUsername && manualPassword) {
      await dispatch({
        type: "SET_USER",
        user: "new",
        userName: `${manualUsername}`,
      });

      localStorage.setItem("userName", manualUsername);
      localStorage.setItem("userLoggedIn", true);
    }
  };
  return (
    <div className="login">
      <div className="welcome__text">
        <p>Login to Infinite Scroll</p>
      </div>
      <form className="form" type="submit">
        <label>Username</label>
        <input
          value={manualUsername}
          onChange={(e) => changeUsername(e)}
          placeholder="Username"
          type="text"
        ></input>
        <br />
        <label>Password</label>
        <input
          value={manualPassword}
          onChange={(e) => changePassword(e)}
          placeholder="Password"
          type="text"
        ></input>
        <br />
        <button
          type="submit"
          className="button"
          onClick={(e) => manualSignIn(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
