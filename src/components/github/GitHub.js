import React, { useState, useEffect } from "react";
import "./GitHub.scss";
import WIP from "../../stockPhotos/WIPDesktop.jpg";
import Test from "./Test.js";
export default function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  //functional componentDidMount() the useEffect will only run once
  useEffect(() => {
    fetch("https://api.github.com/users/miklo88/repos")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepos(result);
          // console.log(result);
        },
        //handling errors
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // console.log(JSON.stringify(repos));
  // for (let line = 0; line < thing.length; i++) {
  // const data = JSON.stringify(repos);
  // const slicedData = data.split(",");

  if (error) {
    return (
      // <div className='error-message'>
      <div className='dummy'>
        <Test />
        <div className='development-p'>
          HTTP 418 <br />
          Oh snap! Looks like something happened behind the scenes. Hang tight
          while my lil crew figures this hot mess out.
          {error.message}
        </div>
        <img className='WIP' src={WIP} alt='WIPDesktop' />
        {console.log("error hit")}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className='loading-message'>
        Loading...
        {console.log("loading hit")}
      </div>
    );
  } else {
    return (
      <>
        <Test />
        <div className='repo-items'>
          <h1 className='development'>Web Development Projects</h1>
          {/* {repos.map((repo) => (
            <div className='repo-item' key={repo.id}>
              <p className='item'>Title: {repo.name}</p>
              <img src={repo.blobs_url} alt='blob' />
              <img src={repo.commits_url} alt='blob' />
              <p className='item'>{repo.commits_url}</p>
            </div>
          ))} */}
        </div>
      </>
    );
  }
}

// // return null;
