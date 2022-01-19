import "./App.css";
import React, { createContext, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { reducer, initialState } from "./Reducer";
import Login from "./Login";
import Home from "./pages/Home";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const UserLoggedIn = localStorage.getItem("userLoggedIn");
    if (JSON.parse(UserLoggedIn) === true) {
      let manualUsername = localStorage.getItem("userName");
      dispatch({
        type: "SET_USER",
        user: "new",
        userName: `${manualUsername}`,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {state.loggedIn === false ? (
          <Login />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
