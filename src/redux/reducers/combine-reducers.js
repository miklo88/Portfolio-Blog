///// COMBINE REDUCERS
import { combineReducers } from "redux";
import users from "./Users-Reducers";
import usersFilter from "./Users-Filter";

export default combineReducers({
  users,
  usersFilter,
});
