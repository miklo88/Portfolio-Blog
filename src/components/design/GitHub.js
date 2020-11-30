import React, { useState, useEffect } from "react";
import "./GitHub.scss";
import WIP from "../../stockPhotos/WIPDesktop.jpg";
export default function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);
  //functional componentDidMount() the useEffect will only run once
  useEffect(() => {
    // playing with pagination and established how many repos I want to display.
    // fetch("https://api.github.com/users/miklo88/repos?page=1&per_page=1000")
    fetch("https://api.github.com/users/miklo88/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepos(result);
        },
        //handling errors
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(repos);

  if (error) {
    return <div className='error-message'>Whoops: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loading-message'>Loading...</div>;
  } else {
    return (
      <div className='repo-items'>
        {/* {repos.map((repo) => ( */}
        {/* <p className='repo-item' key={repo.id}> */}
        {/* UNPACKING THE OWNER URL */}
        {/* <p className='item'>{repo.name}</p> */}
        {/* <img src={repo.owner.avatar_url} alt='avatar' /> */}
        {/* <img src={repo.blobs_url} alt='blob' /> */}
        {/* <img src={repo.commits_url} alt='blob' /> */}
        {/* <p className='item'>{repo.owner.avatar_url}</p> */}
        {/* <p className='item'>{repo.owner.html_url}</p> */}
        {/* {repo.owner.starred_url} */}
        {/* {repo.pulls_url} */}
        {/* </p> */}
        {/* ))} */}
        <h1 className='development'>Web Development Projects</h1>
        <p className='development-p'>
          HTTP 418 <br />
          Sorry this is still under construction! If you really want to find
          something just right click and inspect your browser! Hint, it's under
          the "Console" tab and you'll see an "Array". Just click it's toggle
          arrow.
        </p>
        <img className='WIP' src={WIP} alt='WIPDesktop' />
      </div>
    );
  }
}
