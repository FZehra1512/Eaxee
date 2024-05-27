import React, { useEffect } from 'react'
import '../Blogs/blogs.css'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <img alt='' className='box-1-card-img' src={require('../../../Assets/License Management.jpg')}></img>
            <div className='box-1-card-text'>
              <h2>Unveiling 2024 Enterprise Architecture trends reports!</h2>
              <p>In the last few years, we’ve seen extraordinary changes in technology with the rise of generative AI. As a result of health emergencies, conflict, and extreme weather, supply chains have been interrupted. </p>
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/Meta Modeler.png')}></img>
            <div className='box-2-card-text'>
              <h2>Step-by-step: How to develop Enterprise Architecture Services</h2>
              <p>Agile enterprise architecture management practices may want to consider developing repeatable Enterprise Architecture Services.</p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/Impex.jpg')}></img>
            <div className='box-2-card-text'>
              <h2>How AtkinsRéalis creates shared value between solution and enterprise architecture</h2>
              <p>To effectively navigate changes, Enterprise and Solution Architecture teams need to collaborate to enhance an organization’s architectural agility and ensure a competitive edge. </p>
            </div>
          </div>
          <div className='box-2-card'>
            <img alt='' className='box-2-card-img' src={require('../../../Assets/animation.png')}></img>
            <div className='box-2-card-text'>
              <h2>Charting new courses: Bizzdesign’s bold year redefining Enterprise Architecture boundaries</h2>
              <p>We’ve had a big year at Bizzdesign where we’ve significantly impacted the Enterprise Architecture industry.</p>
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
