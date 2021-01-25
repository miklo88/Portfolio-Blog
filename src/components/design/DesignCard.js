import React from "react";
import { Link } from "react-router-dom";

export default function DesignCard(props) {
  return (
    <>
      <div className='photos-container'>
        <img className='photo' src={props.photo} alt='pic' />
        <Link className='design-link' to={props.component}>
          <p className='title-image'>{props.photoTitle}</p>
        </Link>
      </div>
    </>
  );
}
