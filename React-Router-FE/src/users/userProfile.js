import React from "react";
import users from "./users";

const userProfile = () => {
  return (
    <div className='Profile-Component'>
      <h1 className='Page-Title'>`${users}`</h1>
    </div>
  );
};

export { userProfile };
