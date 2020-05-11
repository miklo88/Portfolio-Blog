import React, { useState, useEffect } from "react";
//componentDidMount
// const Component = () => {
//   useEffect(() => {
//     console.log("Behavior before component is added to the DOM");
//   }, []);
// };
// //componentDidUpdate
// const UpdateComponent = () => {
//   useEffect(() => {
//     console.log("Behavior when the component receives new state or props");
//   });
// };
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
//medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd
https: const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>I'm a projects component</h1>
      <section className='project-one-container'>
        <p>one</p>
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
