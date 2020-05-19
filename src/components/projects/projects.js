// API "https://api.github.com/users/miklo88/repos"
import React, { useState, useEffect } from "react";
// import ProjectCard from "./projectCard";

const Projects = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // //componentDidMount // componentDidUpdate
  //fetching data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      //getting response data and returning it as json
      const data = await response.json();
      const item = data.results;
      setData(item);
      setLoading(false);
      console.log(data);
    }
    fetchData();
  }, [url]);
  console.log(data);
  return { data, loading };
};

//what were rendering
export default () => {
  const { data, loading } = Projects("https://api.github.com/users/example");
  console.log(loading);
  console.log(data);
  return (
    <div className='project-container'>
      <section className='project-one-container'>
        {loading ? <div>...loading up</div> : <p>{data}</p>}
      </section>
      {/* <ProjectCard
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
      />*/}
    </div>
  );
};
