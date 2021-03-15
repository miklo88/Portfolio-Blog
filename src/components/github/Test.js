import React, { useState, useEffect } from "react";
import photo from "../../stockPhotos/Photography/ascending.jpg";

export default function Test() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [thing, setThing] = useState([]);

  //functional componentDidMount() the useEffect will only run once

  useEffect(() => {
    fetch("http://localhost:4000/home")
      // const testing = request.response;
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setThing(result);
          console.log(result);
        },
        //handling errors
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // console.log(JSON.stringify(thing));
  // const data = JSON.stringify(thing);
  // const slicedData = data.split(",");
  const slicedData = thing;
  console.log(typeof slicedData);
  // console.log("values", slicedData);
  console.log(slicedData["tempList"]);
  if (slicedData["tempList"]) {
    const testArr = "tester";
    // slicedData["tempList"].push(testArr);
    slicedData["tempList"].push(photo);
  } else {
    console.log("missed templist");
  }
  if (isLoaded === false) {
    return <div>Loading up......</div>;
  } else {
    return (
      <>
        <div>
          hi
          {/* {slicedData.map((slice) => ( */}
          <>
            {/* <div>{slice}</div> */}
            <div>{slicedData["tempList"]}</div>
            <div>hola</div>
            <img src={slicedData["tempList"]} alt='photo' />
          </>
          {/* ))} */}
        </div>

        <div>{error}</div>
      </>
    );
  }
}
