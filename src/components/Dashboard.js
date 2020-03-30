import React from "react";
import dashIMG from "../stockPhotos/portBW1.JPG";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <img className='dashboard-img' src={dashIMG} alt='dash-img' />
      <h1 className='dashboard-h1'>MIKLO</h1>
    </div>
  );
}
export default Dashboard;
