import React from "react";
import aboutIMG from "../stockPhotos/portBW1.JPG";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <img className='about-img' src={aboutIMG} alt='img' />
    </div>
  );
}
export default Dashboard;
