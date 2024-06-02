import React, { useEffect } from 'react';
import '../Blogs/blogs.css';

const Blog = () => {

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      img: require('../../../Assets/images/blog-1.png'),
      title: "Why an Organization Needs an EA Tool?",
      description: "Organizations, especially smaller to mid-sized, often come across a question whether to invest in an EA tool or not while they already have access to various drawing tools and spreadsheet software. Hence, justifying the case internally for why a proper EA tool is necessary remains a challenge. In the following, six reasons are provided that should help prepare a compelling case for getting the CEO sign-off on the purchase of a specialized EA tool."
    },
    {
      img: require('../../../Assets/images/blog-2.jpg'),
      title: "Towards Value from Enterprise Architecture",
      description: "Architecture at the level of an entire organization is referred to as Enterprise Architecture. It comprises of principles, methods and models that are engulfed and used in the design of the enterprise’s organizational structure, business processes, information systems, and infrastructure. EA is the system in which an institution plans and organizes its IT infrastructure, business processes and strategies."
    },
    {
      img: require('../../../Assets/images/blog-3.png'),
      title: "Why Enterprise Architects Need an EA Tool?",
      description: "Developing and maintaining a holistic and end-to-end architectural view of an organization entails the enterprise architects must work on multiple documents and artifacts (including but not limited to process diagrams, catalogs, data models, networks diagrams and strategy documents) that are usually edited and visualized through various productivity tools."
    },
    {
      img: require('../../../Assets/images/blog-4.png'),
      title: "Enterprise Architecture",
      description: "Characterized by rapid development, growth and innovation, the digital era is confronting enterprises with an increasing variety of options to deal with at an ever faster changing environment."
    },
    {
      img: require('../../../Assets/images/blog-3.png'),
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
              <p>{selectedBlogs[1].description.slice(0,200)+"..."}</p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={selectedBlogs[2].img}></img>
            <div className='box-2-card-text'>
              <h2>{selectedBlogs[2].title}</h2>
              <p>{selectedBlogs[2].description.slice(0,200)+"..."}</p>
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
                <p>{blog.description.slice(0,200)+"..."}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;
