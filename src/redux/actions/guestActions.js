export const ADD_GUEST = "ADD_GUEST";

let nextGuestId = 0;

export function addGuest(text) {
  return {
    type: ADD_GUEST,
    id: nextGuestId++,
    text
  };
}