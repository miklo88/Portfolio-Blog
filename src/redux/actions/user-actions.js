let nextUserId = 0;

//adding a user to state.
export const addUser = (text) => ({
  type: "ADD_USER",
  id: nextUserId++,
  text,
});
//removing-deleting a user
export const deleteUser = (id) => ({
  type: "DELETE_USER",
  id: id,
});

// exports UserFilters to export to the reducer
export const UserFilters = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
};
