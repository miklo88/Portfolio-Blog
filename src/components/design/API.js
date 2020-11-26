import React, { useState, useEffect } from "react";
import "./Design.scss";

export default function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);
  //functional componentDidMount() the useEffect will only run once
  useEffect(() => {
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
  // console.log(repos);

  if (error) {
    return <div className='error-message'>Whoops: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loading-message'>Loading...</div>;
  } else {
    return (
      <div className='repo-items'>
        {repos.map((repo) => (
          <p key={repo.id}>{repo.name}</p>
        ))}
      </div>
    );
  }
}
