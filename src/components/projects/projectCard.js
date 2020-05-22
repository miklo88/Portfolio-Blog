import React from "react";
import "./projectcard.scss";
export default function ProjectCard(props) {
  // console.log(props);
  return (
    <div className='project-card'>
      <h1 className='project-title'>Name: {props.project.name}</h1>{" "}
      <p className='project-description'>
        Description: {props.project.description}
      </p>
      <p className='project-url'> Url: {props.project.url} </p>
    </div>
  );
}
