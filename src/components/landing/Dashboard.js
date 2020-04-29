import React from "react";
import { Link } from "react-router-dom";
import about from "../../stockPhotos/dame.png";
import blog from "../../stockPhotos/dame.png";
import drink from "../../stockPhotos/PENECILLIN.jpg";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <p className='dash-p-landing'>
        Web Developing<br></br>
        Visual Design<br></br>
        Chicago, IL
      </p>
      <img className='dashboard-img-about' src={about} alt='dash-img' />
      <Link className='dash-link-about' to='/blog'>
        About
      </Link>
      <img className='dashboard-img-blog' src={blog} alt='dash-img' />
      <Link className='dash-link-blog' to='/blog'>
        Blog
      </Link>
      <img className='dashboard-img-contact' src={drink} alt='dash-img' />
      <Link className='dash-link-contact' to='/blog'>
        Contact
      </Link>
    </div>
  );
};

export default Dashboard;
