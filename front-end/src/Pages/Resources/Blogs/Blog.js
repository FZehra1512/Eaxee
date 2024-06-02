import React from 'react';
import '../Blogs/blogs.css';
import blogs from './blogObject';
import { Link } from 'react-router-dom';

const Blog = () => {

  // Function to get random unique indices
  const getRandomIndices = (total, count) => {
    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * total));
    }
    return Array.from(indices);
  };

  // Get three random indices
  const randomIndices = getRandomIndices(blogs.length, 3);
  // console.log(randomIndices)
  
  // Separate selected and remaining blogs
  const selectedBlogs = randomIndices.map(index => blogs[index]);
  const remainingBlogs = blogs.filter((_, index) => !randomIndices.includes(index));

  return (
    <div className="Blog-page">
      <div className="hero-section">
        <div>
          {/* <hr></hr> */}
          <div className="hero-text">
            <h1>Resource - Blog</h1>
          </div>
          <hr></hr>
        </div>
        <div className="search-bar">
          <div className="search-bar-text">
            <h2>Explore Our Blog – Insights and Ideas Await!</h2>
          </div>
          <div className="search-bar-input">
            <input placeholder="Search Blogs..."></input>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      <div className="blog-hero">
        <div className="box-1">
          <Link to={`/blog/${selectedBlogs[0].id}`} className="box-1-card">
            <img
              alt=""
              className="box-1-card-img"
              src={selectedBlogs[0].image}
            ></img>
            <div className="box-1-card-text">
              <h2>{selectedBlogs[0].title}</h2>
              <p>{selectedBlogs[0].description}</p>
            </div>
          </Link>
        </div>

        <div className="box-2">
          <Link to={`/blog/${selectedBlogs[1].id}`} className="box-2-card">
            <img
              alt=""
              className="box-2-card-img"
              src={selectedBlogs[1].image}
            ></img>
            <div className="box-2-card-text">
              <h2>{selectedBlogs[1].title}</h2>
              <p>{selectedBlogs[1].description}</p>
            </div>
          </Link>
          <Link to={`/blog/${selectedBlogs[2].id}`} className="box-2-card">
            <img
              alt=""
              className="box-2-card-img"
              src={selectedBlogs[2].image}
            ></img>
            <div className="box-2-card-text">
              <h2>{selectedBlogs[2].title}</h2>
              <p>{selectedBlogs[2].description}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="blog-list">
        <h3 className="heading">Blogs</h3>
        <div className="blog-container">
          {remainingBlogs.map((blog, index) => (
            <Link
              to={`/blog/${blog.id}`}
              className="blog-container-card"
              key={index}
            >
              <img alt="" src={blog.image}></img>
              <div className="card-text">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
