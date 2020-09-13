import React, { useEffect } from "react";
import landing from "../../stockPhotos/discovery.jpg";
import "./Landing.scss";

function Landing() {
  // const greet = "MIKLO";
  useEffect(() => {
    const timer = setTimeout(() => {
      // document.getElementById("Welcome");
      console.log("MIKLO");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />

        <p id='Welcome' className='welcome'>
          {useEffect}
        </p>
      </div>
    </div>
  );
}

export default Landing;
