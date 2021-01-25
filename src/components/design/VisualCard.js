import React from "react";

export default function VisualCard(props) {
  return (
    <>
      <div className={props.divClassName}>
        <img
          className={props.imgClassName}
          src={props.source}
          alt={props.alt}
        />
        <p className={props.pClassName}>
          {props.title}
          <br />
          {props.location}
        </p>
      </div>
    </>
  );
}
