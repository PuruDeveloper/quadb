export const initialState = {
  user: null,
  userName: null,
  loggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        userName: action.userName,
        loggedIn: true,
      };
    case "DELETE_USER":
      return {
        ...state,
        user: null,
        userName: null,
        loggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};
