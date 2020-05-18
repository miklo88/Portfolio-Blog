import React from "react";

export default function ProjectCard(props) {
  console.log(props);
  return (
    <div className='project-card'>
      <img className='project-img' src={props.project.imgUrl} alt='' />
      <h1>Title: {props.project.title}</h1>
      <h3>Author: {props.project.author}</h3>
      <p>Description: {props.project.description}</p>
    </div>
  );
}
