import React, { useState, useEffect } from "react";
import "./GitHub.scss";
import WIP from "../../stockPhotos/WIPDesktop.jpg";

export default function API() {
  const [error, setError] = useState("Error");
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
    return (
      <div className='error-message'>
        <p className='development-p'>
          HTTP 418 <br />
          Oh snap! Looks like something happened behind the scenes. Hang tight
          while I figure this hot mess out. Thank you for the patience.
        </p>
        <img className='WIP' src={WIP} alt='WIPDesktop' />
        {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div className='loading-message'>Loading...</div>;
  } else {
    return (
      <div className='repo-items'>
        <h1 className='development'>Web Development Projects</h1>
        {/* UNPACKING THE OWNER URL */}
        {repos.map((repo) => (
          <p className='repo-item' key={repo.id}>
            <p className='item'>{repo.name}</p>
            <img src={repo.blobs_url} alt='blob' />
            <img src={repo.commits_url} alt='blob' />
            <p className='item'>{repo.owner.avatar_url}</p>
            <p className='item'>{repo.owner.html_url}</p>
            {repo.owner.starred_url}
            {repo.pulls_url}
          </p>
        ))}
      </div>
    );
  }
}
