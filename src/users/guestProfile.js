import React from "react";

export default function GuestProfile(props) {
  return (
    <div className='Guest-Profile'>
      <p>{props.newGuest.email}</p>
      <p>{props.newGuest.username}</p>
      <p>Beinvenidos!</p>
    </div>
  );
}
