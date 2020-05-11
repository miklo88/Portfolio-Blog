import React, { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [repos, setRepos] = useState("");

  //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://api.github.com/users/miklo88");
      // const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      // const [item] = data.results;
      console.log(data);
      // setData(item);
      // setLoading(false);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className='projects-container'>
      <h1>I'm a projects component</h1>
      <section className='project-one-container'>
        <ul>
          {loading ? (
            <div>...loading up</div>
          ) : (
            <li>
              {data.name.first} <br />
              {data.name.last}
              <br />
              {data.dob.age}
              <br />
              {data.dob.date}
            </li>
          )}
        </ul>
      </section>
      <section className='project-two-container'>
        <ul>{loading ? <div>...loading up</div> : <li>{data.username}</li>}</ul>
      </section>
      <section className='project-three-container'>
        <p>three</p>
      </section>
    </div>
  );
};

export default Projects;
