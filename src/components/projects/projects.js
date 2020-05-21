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
      <ProjectCard
        project={{
          archive_url: "",
          name: "JavaScript Essentials",
          description: "A lil somethin somethin about this project.",
        }}
      />
      <ProjectCard
        project={{
          archive_url: "",
          name: "JavaScript Essentials",
          description: "A lil somethin somethin about this project.",
        }}
      />
      <ProjectCard
        project={{
          archive_url: "",
          name: "JavaScript",
          description: "A lil somethin somethin about this project.",
        }}
      />
    </div>
  );
};

export default Projects;
