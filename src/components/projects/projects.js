import React, { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [repos, setRepos] = useState("");

  //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchMyAPI() {
      const url = "https://api.github.com/users/miklo88/repos";
      const response = await fetch(url);
      const data = await response.json();
      const item = data.response;
      setData(item);
      setLoading(false);
      console.log(data);
    }
    fetchMyAPI();
  }, []);
  return (
    <div className='project-container'>
      <section className='project-one-container'>
        {/* <ul>{loading ? <div>...loading up</div> : <li>{data}</li>}</ul> */}
        <p>one</p>
      </section>
      <section className='project-two-container'>
        <ul>{loading ? <div>...loading up</div> : <li>{data}</li>}</ul>
        <p>two</p>
      </section>
      <section className='project-three-container'>
        <p>three</p>
      </section>
    </div>
  );
};

export default Projects;
