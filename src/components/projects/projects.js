import React, { useState, useEffect } from "react";
// //componentWillUnmount
// const UnmountComponent = () => {
//   useEffect(() => {
//     return () => {
//       console.log(
//         "Behavior right before the component is removed from the DOM"
//       );
//     };
//   }, []);
// };

const Projects = () => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  //componentDidMount // componentDidUpdate
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [item] = data.results;
      setPerson(item);
      setLoading(false);
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
              {person.name.first} <br />
              {person.name.last}
              <br />
              {person.dob.age}
              <br />
              {person.dob.date}
            </li>
          )}
        </ul>
      </section>
      <section className='project-two-container'>
        <p>two</p>
      </section>
      <section className='project-three-container'>
        <p>three</p>
      </section>
    </div>
  );
};

export default Projects;
