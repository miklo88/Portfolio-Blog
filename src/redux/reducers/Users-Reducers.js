// User-Reducer. adding the user or deleting the user from state.
const users = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
          userName: action.userName,
          email: action.email,
          password: action.password,
        },
      ];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.id);
    default:
      return state;
  }
};

export default users;
