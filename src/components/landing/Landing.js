import React, { useEffect, useState } from "react";
import landing from "../../stockPhotos/discovery.jpg";
import "./Landing.scss";

function Landing() {
  const [greet, sayGreet] = useState("");
  const [greet1, sayGreet1] = useState("");
  // passing the variable saying to the useEffect in the sayGreet()
  let saying = "MIKLO";
  let saying1 = "Web Design Portfolio by: Carl Redding";

  useEffect(() => {
    const timer = setTimeout(() => {
      return sayGreet(saying);
    }, 500);
    return () => clearTimeout(timer);
  }, [saying]);
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayGreet1(saying1);
    }, 600);
    return () => clearTimeout(timer);
  }, [saying1]);
  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />
        <p className='welcome'>{greet}</p>
        <p className='welcome2'>{greet1}</p>
        {/* displaying the greet from useEffect */}
      </div>
    </div>
  );
}

export default Landing;
