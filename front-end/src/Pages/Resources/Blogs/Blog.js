import React, { useEffect } from 'react';
import '../Blogs/blogs.css';

const Blog = () => {

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      img: require('../../../Assets/License Management.jpg'),
      title: "Unveiling 2024 Enterprise Architecture trends reports!",
      description: "In the last few years, we’ve seen extraordinary changes in technology with the rise of generative AI. As a result of health emergencies, conflict, and extreme weather, supply chains have been interrupted."
    },
    {
      img: require('../../../Assets/Impex.jpg'),
      title: "How AtkinsRéalis creates shared value between solution and enterprise architecture",
      description: "To effectively navigate changes, Enterprise and Solution Architecture teams need to collaborate to enhance an organization’s architectural agility and ensure a competitive edge."
    },
    {
      img: require('../../../Assets/animation.png'),
      title: "Charting new courses: Bizzdesign’s bold year redefining Enterprise Architecture boundaries",
      description: "We’ve had a big year at Bizzdesign where we’ve significantly impacted the Enterprise Architecture industry."
    },
    {
      img: require('../../../Assets/animation.png'),
      title: "Blog Card Heading",
      description: "lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd"
    },
    {
      img: require('../../../Assets/animation.png'),
      title: "Blog Card Heading",
      description: "lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd"
    },
    {
      img: require('../../../Assets/animation.png'),
      title: "Blog Card Heading",
      description: "lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd"
    },
    {
      img: require('../../../Assets/animation.png'),
      title: "Blog Card Heading",
      description: "lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd"
    }
  ];

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
    <div className='Blog-page'>
      <div className='hero-section'>
        <div>
          {/* <hr></hr> */}
          <div className='hero-text'><h1>Resource - Blog</h1></div>
          <hr></hr>
        </div>
        <div className='search-bar'>
          <div className='search-bar-text'><h2>Explore Our Blog – Insights and Ideas Await!</h2></div>
          <div className='search-bar-input'><input placeholder='Search Blogs...'></input><button className='search-btn'>Search</button></div>
        </div>
      </div>

      <div className='blog-hero'>
        <div className='box-1'>
          <div className='box-1-card'>
            <img alt='' className='box-1-card-img' src={selectedBlogs[0].img}></img>
            <div className='box-1-card-text'>
              <h2>{selectedBlogs[0].title}</h2>
              <p>{selectedBlogs[0].description}</p>
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={selectedBlogs[1].img}></img>
            <div className='box-2-card-text'>
              <h2>{selectedBlogs[1].title}</h2>
              <p>{selectedBlogs[1].description}</p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={selectedBlogs[2].img}></img>
            <div className='box-2-card-text'>
              <h2>{selectedBlogs[2].title}</h2>
              <p>{selectedBlogs[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-list'>
        <h3 className='heading'>Blogs</h3>
        <div className='blog-container'>
          {remainingBlogs.map((blog, index) => (
            <div className='blog-container-card' key={index}>
              <img alt='' src={blog.img}></img>
              <div className='card-text'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;
