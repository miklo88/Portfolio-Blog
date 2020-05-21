import React from "react";

export default function ProjectCard(props) {
  // console.log(props);
  return (
    <div className='project-card'>
      <img className='project-img' src={props.project.git_url} alt='' />
      <h1 className='project-title'>Name: {props.project.name}</h1>
      <p className='project-description'>
        Description: {props.project.description}
      </p>
    </div>
  );
}
