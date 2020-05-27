import React from "react";
import landing from "../../stockPhotos/hiLogo.png";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='landing'>
        {/* <img className='dashboard-img-landing' src={landing} alt='dash-img' /> */}
        <div className='dashboard-img-landing'></div>
        <img className='dash-p-landing' src={landing} alt='dash-img' />
        <p className='welcome'>welcome to my portfolio page</p>
      </div>
    </div>
  );
};

export default Dashboard;
