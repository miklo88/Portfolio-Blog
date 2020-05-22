// API "https://api.github.com/users/miklo88/repos"
import React from "react";
// import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import "./projects.scss";

const Projects = (url) => {
  // const [data, setData] = useState([{}]);
  // const [loading, setLoading] = useState(true);
  //   // //componentDidMount // componentDidUpdate
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(url);
  //       //getting response data and returning it as json
  //       const data = await response.json();
  //       const item = JSON.stringify(data);
  //       //setting data.results to state
  //       setData(item);
  //       setLoading(false);
  //     }
  //     fetchData();
  //   }, [url]);
  //   return { data, loading };
  // };
  //what were rendering
  // export default () => {
  //   const { data, loading } = Projects("https://api.github.com/users/miklo88");
  //  <section className='project-one-container'>
  //   {loading ? <div>...loading up</div> : <p>{data}</p>}
  //   {console.log(data)}
  // </section>
  return (
    <div className='project-container'>
      <h1 className='project-h1'>Projects</h1>
      <ProjectCard
        project={{
          name: "JavaScript-Reps",
          description: "Traversy Medias JavaScript Crash Course",
          url: "https://api.github.com/repos/miklo88/JavaScript-Reps",
        }}
      />
      <ProjectCard
        project={{
          name: "JavaScript Essentials",
          description:
            "JavaScript fundamentals course from Udemy. (Link to course is in README)",
          url: "https://api.github.com/repos/miklo88/JavaScript-Essentials",
        }}
      />
      <ProjectCard
        project={{
          name: "JavaScript30",
          description: "Wesbos JavaScript30",
          url: "https://api.github.com/repos/miklo88/JavaScript30",
        }}
      />
    </div>
  );
};

export default Projects;
