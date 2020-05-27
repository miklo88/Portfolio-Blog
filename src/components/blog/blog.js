import React from "react";
import wip from "../../stockPhotos/doodle1.JPG";
import "./blog.scss";

const Blog = () => {
  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Blog</h1>
      <div className='message-container'>
        <p className='wip'>
          This blog is still a work in progess. To see how i'm building it
          follow me!
          <a href='https://www.linkedin.com/in/carl-redding' target='blank'>
            Linkedin
          </a>
          and
          <a href='https://twitter.com/Miklo13F'>Twitter</a>
        </p>
      </div>
      <img className='wip-img' src={wip} alt='placement-holder' />
    </div>
  );
};

export default Blog;
