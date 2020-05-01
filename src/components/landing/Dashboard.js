import React from "react";

import landing from "../../stockPhotos/discovery.jpg";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />
        <p className='dash-p-landing'>
          Web Developing,<br></br>
          Visual Design,<br></br>
          Chicago, IL
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
