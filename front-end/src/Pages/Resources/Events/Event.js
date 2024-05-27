import React, { useEffect } from 'react'
import '../Events/Event.css'


// TODO: 1. replace the dummy text of paragraph in hero-section

const Event = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='Event-page'>


            <div className='hero-section'>
                <div>
                    {/* <hr></hr> */}
                    <div className='hero-text'><h1>Resource - Event</h1></div>
                    <hr></hr>
                </div>
                <div className='search-bar'>
                    <div className='search-bar-text'><h2>Where to meet us </h2></div>
                    <p>Platform Customer success Our mission and approach Resources Bizzdesign Academy EN Events Home Events Where to meet us Come and meet us at one of our events worldwide to find out how Bizzdesign and Enterprise Studio can help you design your digital business. Grab a coffee and share ideas and best practices with our experts. Take a look at our events below to see what’s happening near you. If there are no upcoming events in your area, then join the discussion on <a href=''>LinkedIn</a> or <a href=''>Twitter</a></p>
                </div>

            </div>

            <div className='Event-hero'>
                <div className='current-event'>
                    <center>
                        <h1><span>Join us</span> at these Events!</h1>
                    </center>
                    <div className='current-event-list'>

                        <div className="card mb-1">
                            <img src={require('../../../Assets/images/event-1.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ServiceNow24 | Live Event </h5>
                                <p className="card-text">Digital transformation can seem like a clear path forward, but navigating change across a complex ….</p>
                                <p className="card-text"><small className="text-body-secondary">7 - 9 May 2024 Las Vegas, US</small></p>
                            </div>
                        </div>
                        <div className="card mb-1">
                            <img src={require('../../../Assets/images/event-2.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gartner AIBS | Live Event </h5>
                                <p className="card-text">Is your organization grappling with the complexities of digital transformation? Do your senior IT …</p>
                                <p className="card-text"><small className="text-body-secondary">7 - 9 May 2024 Las Vegas, US</small></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='past-event'></div>
            </div>
        </div>
    )
}

export default Event
