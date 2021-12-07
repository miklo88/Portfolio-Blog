import React, { useState, useEffect, setState } from "react";
import "./GitHub.scss";
import WIP from "../../stockPhotos/WIPDesktop.jpg";

export default function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  console.log(items);
  //functional componentDidMount() the useEffect will only run once
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
    };
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Y423QMOn9VCVOVmxkHg1ZTg8x8S3kszz7UHwXYvd"
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        //handling errors
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  let nasaImage = items.url;
  let nasaImageHDURL = items.hdurl;

  const itemElements = (
    <div className='repo-item'>
      <h1 className='page-title'>NASA Astronomy Picture of the Day</h1>
      <p className='date'>{items.date}</p>
      <h1 className='nasa-title'>{items.title}</h1>
      {/* <p className='repo-item'>{items.service_version}</p> */}
      <img src={nasaImage} alt='Photo of the Day' />
      {/* <img src={nasaImageHDURL} alt='Space Image' /> */}
      <p className='explanation'>{items.explanation}</p>
      <p className='copyright'>copyright: {items.copyright}</p>
    </div>
  );

  if (error) {
    return (
      <div className='repo-item'>
        <div className='development-p'>
          HTTP 418 <br />
          Oh snap! Looks like something happened behind the scenes. Hang tight
          while my lil crew figures this hot mess out.
          {error.message}
        </div>
        <img className='WIP' src={WIP} alt='WIPDesktop' />
      </div>
    );
  } else if (!isLoaded) {
    return <div className='repo-item'>Loading...</div>;
  } else {
    return <>{itemElements}</>;
  }
}
