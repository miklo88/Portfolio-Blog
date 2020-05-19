import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // //componentDidMount // componentDidUpdate
  //fetching data
  useEffect(() => {
    async function fetchMyAPI() {
      const url = "https://api.github.com/users/miklo88/repos";
      const response = await fetch(url);
      //getting response data and returning it as json
      const data = await response.json();
      const item = data.results;
      setData(item);
      setLoading(false);
      console.log(data);
      console.log(data[0]["git_url"]);
      console.log(data[0]["name"]);
      console.log(data[0]["owner"]);
    }
    fetchMyAPI();
  }, []);
  //need to update the state.
  //add data into your array to map over it
  return (
    <div className='project-container'>
      <section className='project-one-container'>
        <ul>{loading ? <div>...loading up</div> : <li>{data}</li>}</ul>
        <p>one</p>
      </section>
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
