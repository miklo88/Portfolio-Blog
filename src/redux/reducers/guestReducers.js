import { combineReducers } from "redux";
import { ADD_GUEST } from "../actions/guestActions";

function guest(state, action) {
  switch (action.type) {
    case ADD_GUEST:
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}
function guests(state = [], action) {
  switch (action.type) {
    case ADD_GUEST:
      return [...state, guest(undefined, action)];
    default:
      return state;
  }
}
const newGuest = combineReducers({
  guests
});
export default newGuest;
