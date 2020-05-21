// API "https://api.github.com/users/miklo88/repos"
import React, { useState, useEffect } from "react";
// import ProjectCard from "./projectCard";

const Projects = (url) => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  // //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      //getting response data and returning it as json
      const data = await response.json();
      // console.log(data);
      const item = JSON.stringify(data);
      // const item = data.results; // the response.json body I recieve is an object {} not an array []
      //setting data.results to state
      setData(item);
      setLoading(false);
      // console.log(item); //returns object converted to string
    }
    fetchData();
    // console.log(fetchData()); //take a look aqui in the morning. think i just need to resolve this promise.
  }, [url]);
  // console.log(data);
  return { data, loading };
};

//what were rendering
export default () => {
  const { data, loading } = Projects("https://api.github.com/users/miklo88");

  // console.log(loading); //loads correctly
  // console.log(data);
  return (
    <div className='project-container'>
      <section className='project-one-container'>
        {loading ? <div>...loading up</div> : <p>{data}</p>}
        {console.log(data)}
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
