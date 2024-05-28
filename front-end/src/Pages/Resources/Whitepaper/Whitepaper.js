import React, { useEffect } from 'react'
import '../Whitepaper/Whitepaper.css'

// TODO: 1. replace dummy data with real data that is in whitepaper-card

const Whitepaper = () => {
    const whitepaperCardInfo = [
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-1.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-2.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-3.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-4.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-5.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-6.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-2.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-1.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-4.jpg')
            // },
            // {
            //   title: "Enterprise Architecture Tools",
            //   description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            //   lastUpdated: "Last updated 3 mins ago",
            //   image: require('../../../Assets/images/whitepaper-3.jpg')
            // }
    ];


    useEffect(() => {
        // Scroll to the top of the page on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='Whitepaper-page'>


            <div className='hero-section'>
                <div>
                    {/* <hr></hr> */}
                    <div className='hero-text'><h1>Resource - Whitepaper</h1></div>
                    <hr></hr>
                </div>
            </div>

            <div className='whitepaper-list'>
                {whitepaperCardInfo.length === 0 ? (<h2 style={{marginBottom:"4rem"}}>No Whitepapers available at the moment. Please check back later.</h2>) : (whitepaperCardInfo.map((ele, index) => (
                    <div class="whitepaper-card" key={index}>
                        <div class="card-body">
                            <h5 class="card-title">{ele.title}</h5>
                            <p class="card-text">{ele.description}</p>
                            <p class="card-text"><small class="text-body-secondary">{ele.lastUpdated}</small></p>
                        </div>
                        <img src={ele.image} class="card-img-bottom" alt={ele.title} />
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Whitepaper
