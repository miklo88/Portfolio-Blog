import React from "react";
import wip from "../../stockPhotos/doodle1.JPG";
import "./blog.scss";

const Blog = () => {
  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Blog</h1>
      <div className='message-container'>
        <p className='wip'>
          This blog is still a work in progess. To see updates on how I create
          it follow me on Linkedin and twitter.
        </p>
      </div>
      <img className='wip-img' src={wip} alt='placement-holder' />
    </div>
  );
};

export default Blog;
