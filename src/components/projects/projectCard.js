import React from "react";

export default function ProjectCard(props) {
  console.log(props);
  return (
    <div className='project-card'>
      <img className='project-img' src={props.project.archive_url} alt='' />
      <h1>Name: {props.project.name}</h1>
      <h3>Author: {props.project.author}</h3>
      <p>Description: {props.project.description}</p>
    </div>
  );
}
