import React from "react";

export default function VisualCard(props) {
  return (
    <>
      <img src={props.source} alt={props.alt} />
      <p className='title-location'>
        {props.title}
        <br />
        {props.location}
      </p>
    </>
  );
}
