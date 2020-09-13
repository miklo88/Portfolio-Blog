import React, { useEffect, useState } from "react";
import landing from "../../stockPhotos/discovery.jpg";
import "./Landing.scss";

function Landing() {
  const [greet, sayGreet] = useState("");
  // const greet = "MIKLO";d
  useEffect(() => {
    const timer = setTimeout(() => {
      // document.getElementById("Welcome").innerHTML = { greet };

      return sayGreet("MIKLO");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />

        <p id='Welcome' className='welcome'>
          {greet}
        </p>
      </div>
    </div>
  );
}

export default Landing;
