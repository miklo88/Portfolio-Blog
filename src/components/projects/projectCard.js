import React from "react";

export default function ProjectCard(props) {
  // console.log(props);
  return (
    <div className='project-card'>
      <img className='project-img' src={props.project.git_url} alt='' />
      <h1>Name: {props.project.name}</h1>
      <p>Description: {props.project.description}</p>
    </div>
  );
}
