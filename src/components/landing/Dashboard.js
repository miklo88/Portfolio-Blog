import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../stockPhotos/dame.png";
import drink2 from "../../stockPhotos/JULEPV1.2.jpg";
import drink3 from "../../stockPhotos/PENECILLIN.jpg";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <p className='dash-p-landing'>
        Web Developing<br></br>
        Visual Design<br></br>
        Chicago, IL
      </p>
      <img className='dashboard-img-about' src={about1} alt='dash-img' />
      <Link className='dash-link-about' to='/blog'>
        About
      </Link>
      <img className='dashboard-img-blog' src={drink2} alt='dash-img' />
      <Link className='dash-link-blog' to='/blog'>
        Blog
      </Link>
      <img className='dashboard-img-contact' src={drink3} alt='dash-img' />
      <Link className='dash-link-contact' to='/blog'>
        Contact
      </Link>
    </div>
  );
};

export default Dashboard;
