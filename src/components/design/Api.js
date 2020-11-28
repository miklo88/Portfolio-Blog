// import React, { useState, useEffect } from "react";
// import "./Api.scss";

// export default function API() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [repos, setRepos] = useState([]);
//   //functional componentDidMount() the useEffect will only run once
//   useEffect(() => {
//     // added pagination and established how many repos I want to display.
//     fetch("https://api.github.com/users/miklo88/repos?page=1&per_page=1000")
//       // fetch("https://api.github.com/users/miklo88/repos")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setRepos(result);
//         },
//         //handling errors
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);
//   console.log(repos);

//   if (error) {
//     return <div className='error-message'>Whoops: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div className='loading-message'>Loading...</div>;
//   } else {
//     return (
//       <div className='repo-items'>
//         {repos.map((repo) => (
//           <p className='repo-item' key={repo.id}>
//             {/* UNPACKING THE OWNER URL */}
//             <p className='item'>{repo.name}</p>
//             {/* <img src={repo.owner.avatar_url} alt='avatar' /> */}
//             {/* <img src={repo.blobs_url} alt='blob' /> */}
//             {/* <img src={repo.commits_url} alt='blob' /> */}
//             <p className='item'>{repo.owner.avatar_url}</p>
//             <p className='item'>{repo.owner.html_url}</p>

//             {/* {repo.owner.starred_url} */}
//             {/* {repo.pulls_url} */}
//           </p>
//         ))}
//       </div>
//     );
//   }
// }
