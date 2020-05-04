import React from "react";

import landing from "../../stockPhotos/dameYellow.png";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='landing'>
        <img className='dashboard-img-landing' src={landing} alt='dash-img' />

        <h1 className='dash-p-landing'>hi</h1>
      </div>
      <p className='welcome'>welcome to my portfolio page</p>
    </div>
  );
};

export default Dashboard;
