import React, { useState } from 'react';
import '../Blogs/blogs.css';
import blogs from './blogObject';
import { Link } from 'react-router-dom';



const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const sortByDate = (blogs) => {
    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  const sortedBlogs = sortByDate([...blogs]);
  const topLatestBlogs = sortedBlogs.slice(0, 3);
  const remainingBlogs = sortedBlogs.slice(3);

  // Handle search input change
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredBlogs([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(lowerCaseQuery) ||
        blog.description.toLowerCase().includes(lowerCaseQuery) ||
        blog.author.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredBlogs(filtered);
    }
  };

  const showSearchResults = searchQuery.trim() !== '';

  return (
    <div className="Blog-page">
      <div className="hero-section">
        <div>
          <div className="hero-text">
            <h1>Resource - Blog</h1>
          </div>
          <hr />
        </div>
        <div className="search-bar">
          <div className="search-bar-text">
            {/* <h3>Explore Our Blog – Insights and Ideas Await!</h3> */}
          </div>
          <div className="search-bar-input">
            <input
              placeholder="Search Blogs..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {showSearchResults ? (
        <div className="blog-container m-5">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                className="blog-container-card"
                key={index}
              >
                <img alt="" src={blog.image} />
                <div className="card-text">
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No blogs found!</p>
          )}
        </div>
      ) : (
        <>
          <div className="blog-hero">
            <div className="box-1">
              <Link to={`/blog/${topLatestBlogs[0].id}`} className="box-1-card">
                <img
                  alt=""
                  className="box-1-card-img"
                  src={topLatestBlogs[0].image}
                />
                <div className="box-1-card-text">
                  <h2>{topLatestBlogs[0].title}</h2>
                  <p>{topLatestBlogs[0].description}</p>
                </div>
              </Link>
            </div>

            <div className="box-2">
              <Link to={`/blog/${topLatestBlogs[1].id}`} className="box-2-card">
                <img
                  alt=""
                  className="box-2-card-img"
                  src={topLatestBlogs[1].image}
                />
                <div className="box-2-card-text"> 
                  <h2>{topLatestBlogs[1].title}</h2>
                  <p>{topLatestBlogs[1].description.slice(0, 100) + "..."}</p>
                </div>
              </Link>
              <Link to={`/blog/${topLatestBlogs[2].id}`} className="box-2-card">
                <img
                  alt=""
                  className="box-2-card-img"
                  src={topLatestBlogs[2].image}
                />
                <div className="box-2-card-text">
                  <h2>{topLatestBlogs[2].title}</h2>
                  <p>{topLatestBlogs[2].description.slice(0, 100) + " ..."}</p>
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
                  <img alt="" src={blog.image} />
                  <div className="card-text">
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
