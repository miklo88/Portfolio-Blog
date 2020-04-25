import React from "react";
import dashIMG from "../../stockPhotos/portBW1.JPG";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <img className='dashboard-img' src={dashIMG} alt='dash-img' />

      <p className='dashboard-p'>
        Web Developing<br></br>
        Visual Design<br></br>
        Chicago, IL
      </p>
    </div>
  );
}

export default Dashboard;
