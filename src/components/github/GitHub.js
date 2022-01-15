import React, { useState, useEffect } from "react";
import "./GitHub.scss";
import WIP from "../../stockPhotos/WIPDesktop.jpg";

export default function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  console.log(items);

  //functional componentDidMount() the useEffect will only run once
  useEffect(() => {
    // const requestOptions = {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   mode: "no-cors",
    // };
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

  // successful response render
  const nA = "N/A";
  let nasaCopyright;
  let nasaDate;
  let nasaExplanation;
  let nasaTitle;
  let nasaImage; //media type dictates the img shown

  //nasaDate
  if (!items.date) {
    nasaDate = nA;
  } else {
    nasaDate = items.date;
  }
  //nasaTitle
  if (!items.title) {
    nasaTitle = nA;
  } else {
    nasaTitle = items.title;
  }
  //nasaExplanation
  if (!items.explanation) {
    nasaExplanation = nA;
  } else {
    nasaExplanation = items.explanation;
  }
  //nasaCopyright
  if (items.copyright === "") {
    nasaCopyright = nA;
  } else {
    nasaCopyright = items.copyright;
  }
  //nasaImage aka media_type
  if (items.media_type !== "image") {
    nasaImage = WIP;
  } else {
    nasaImage = items.url;
  }
  // end of successful response render

  if (error) {
    return (
      <div className='repo-item'>
        <div className='explanation'>
          HTTP 418 <br />
          Oh snap! Looks like something happened behind the scenes. Hang tight
          while my lil crew figures this hot mess out. Error message:
          {error.message}.
        </div>
        <img className='WIP' src={WIP} alt='WIPDesktop' />
      </div>
    );
  } else if (!isLoaded) {
    return <div className='repo-item'>Loading...</div>;
  } else {
    return (
      <div className='repo-item'>
        <h1 className='page-title'>NASA Astronomy Picture of the Day</h1>
        <p className='date'>{nasaDate}</p>
        <h1 className='nasa-title'>{nasaTitle}</h1>
        <img src={nasaImage} alt='Nasa Picture' />
        <p className='explanation'>{nasaExplanation}</p>
        <p className='copyright'>© {nasaCopyright}</p>
      </div>
    );
  }
}
