import React, { useEffect } from 'react'
import '../Documentation/Documentation.css'

// TODO: 1. replace dummy data with real data that is in Documentation-card

const Documentation = () => {
    const cardInfo = [
        // {
        //     title: "Getting Started",
        //     description: "Learn the essentials to embark on your journey with Eaxee."
        // },
        // {
        //     title: "Meta Model",
        //     description: "Discover modelling best practices for your enterprise architecture setup."
        // },
        // {
        //     title: "Use Cases",
        //     description: "Explore practical scenarios with Eaxee, such as Application Portfolio Assessment and more."
        // },
        // {
        //     title: "User Guide",
        //     description: "Deep dive into the key features, such as, inventory, Reports, Diagrams, and more."
        // },
        // {
        //     title: "Out-of-the-box Integration",
        //     description: "Configure integrations with external systems using our ready-made solutions."
        // },
        // {
        //     title: "Developer documentation",
        //     description: "Leverage our developer resources to unleash extra value for your organization."
        // }
    ];


    useEffect(() => {
        // Scroll to the top of the page on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='Documentation-page'>

            <div className='hero-section'>
                <div>
                    {/* <hr></hr> */}
                    <div className='hero-text'><h1>Resource - Documentation</h1></div>
                    <hr></hr>
                </div>
            </div>

            <div className='Documentation-list'>
                {cardInfo.length === 0 ? (<div className='div'><h2>No Documentaion available at the moment. Please check back later.</h2></div>) : (

                    cardInfo.map((ele, index) => (
                        <div class="card" key={index}>
                            <div class="card-body">
                                <h6 class="m-3 card-title">{ele.title}</h6>
                                <p class="card-text">{ele.description}</p>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}

export default Documentation
