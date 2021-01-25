import React from "react";
import landing from "../../stockPhotos/Photography/discovery.jpg";
import "./Landing.scss";

function Landing() {
  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />
      </div>
    </div>
  );
}

export default Landing;
