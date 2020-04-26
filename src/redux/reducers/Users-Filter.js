//
import { UsersFilter } from "../actions/User-Actions";

const usersFilter = (state = UsersFilter.SHOW_USER, action) => {
  switch (action.type) {
    case "SET_USER_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default usersFilter;
