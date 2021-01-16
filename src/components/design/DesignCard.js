import React from "react";

export default function DesignCard(props) {
  return (
    <div className='photos-container'>
      <img className='photo' src={props.photo} alt='pic' />
      <p className='title-image'>{props.photoTitle}</p>
    </div>
  );
}
