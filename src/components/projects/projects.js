import React, { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [repos, setRepos] = useState("");

  //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchMyAPI() {
      const url = "https://api.github.com/users/miklo88";
      const response = await fetch(url);
      const data = await response.json();
      const item = data.results;
      setData(item);
      setLoading(false);
      console.log(data);
    }
    fetchMyAPI();
  }, []);
  // i want to display a card that has the project title aka name/description and git_url
  return (
    <div className='projects-container'>
      <h1>I'm a projects component</h1>

      <section className='project-two-container'>
        <ul>{loading ? <div>...loading up</div> : <li>{data.item}</li>}</ul>
      </section>
      <section className='project-three-container'>
        <p>three</p>
      </section>
    </div>
  );
};

export default Projects;
