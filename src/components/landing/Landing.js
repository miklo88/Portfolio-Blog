import React, { useEffect, useState } from "react";
import landing from "../../stockPhotos/discovery.jpg";
import "./Landing.scss";

function Landing() {
  const [greet, sayGreet] = useState("");
  // passing the variable saying to the useEffect in the sayGreet()
  let saying = "MIKLO";
  // const greet = "MIKLO";d
  useEffect(() => {
    const timer = setTimeout(() => {
      return sayGreet(saying);
    }, 5000);
    return () => clearTimeout(timer);
  }, [saying]);

  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />
        {/* displaying the greet from useEffect */}
        <p className='welcome'>{greet}</p>
      </div>
    </div>
  );
}

export default Landing;
