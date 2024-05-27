import React from 'react'
// import Navbar from '../../../C omponents/Navbar'
import '../Blogs/blogs.css'
const Blog = () => {
  return (
    <div className='Blog-page'>

      {/* <Navbar></Navbar> */}

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
            <img alt='' className='box-1-card-img' src={require('../../../Assets/License Management.jpg')}></img>
            <div className='box-1-card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/Meta Modeler.png')}></img>
            <div className='box-2-card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/Impex.jpg')}></img>
            <div className='box-2-card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/animation.png')}></img>
            <div className='box-2-card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-list'>
        <h3 className='heading'>Blogs</h3>
        <div className='blog-container'>
          <div className='blog-container-card'>
            <img alt='' src={require('../../../Assets/animation.png')}></img>
            <div className='card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
          <div className='blog-container-card'>
            <img alt='' src={require('../../../Assets/animation.png')}></img>
            <div className='card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
          <div className='blog-container-card'>
            <img alt='' src={require('../../../Assets/animation.png')}></img>
            <div className='card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
          <div className='blog-container-card'>
            <img alt='' src={require('../../../Assets/animation.png')}></img>
            <div className='card-text'>
              <h2>Blog Card Heading</h2>
              <p> lorem10ansdaksgfjshgdf ajsdjgasd lorem20 asjdkaskdjahksdhas da sdbakjsdkjahsdkjhakshd kjasdkjakd </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
