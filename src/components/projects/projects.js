import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchMyAPI() {
      const url = "https://api.github.com/users/miklo88/repos";
      const response = await fetch(url);
      const data = await response.json();
      const item = data.results;
      setData(item);
      setLoading(false);
      console.log(data);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className='project-container'>
      <section className='project-one-container'>
        <ul>{loading ? <div>...loading up</div> : <li>{data}</li>}</ul>
        <p>one</p>
      </section>
      <ProjectCard
        project={{
          imgUrl: "",
          title: "JavaScript Essentials",
          author: "Carlitos Redding",
          description: "A lil somethin somethin about this project.",
        }}
      />
      <ProjectCard
        project={{
          imgUrl: "",
          title: "JavaScript 101",
          author: "Carlitos Redding",
          description: "A lil somethin somethin about this project.",
        }}
      />
    </div>
  );
}

export default Projects;

// const [repos, setRepos] = useState("");

//componentDidMount // componentDidUpdate
// useEffect(() => {
//   async function fetchMyAPI() {
//     const url = "https://api.github.com/users/miklo88/repos";
//     const response = await fetch(url);
//     const data = await response.json();
//     const item = data.response;
//     setData(item);
//     setLoading(false);
//     console.log(data);
//   }
//   fetchMyAPI();
// }, []);
