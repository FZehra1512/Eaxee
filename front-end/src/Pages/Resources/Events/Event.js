import React, { useEffect } from 'react'
import '../Events/Event.css'

// TODO: 1. replace the dummy text of paragraph in hero-section

const Event = () => {
    const eventsInfo = [
        // {
        //     title: "ServiceNow24 | Live Event",
        //     description: "Digital transformation can seem like a clear path forward, but navigating change across a complex ….",
        //     dateLocation: "7 - 9 May 2024 Las Vegas, US",
        //     image: require('../../../Assets/images/event-1.jpg')
        // },
        // {
        //     title: "Gartner AIBS | Live Event",
        //     description: "Is your organization grappling with the complexities of digital transformation? Do your senior IT …",
        //     dateLocation: "7 - 9 May 2024 Las Vegas, US",
        //     image: require('../../../Assets/images/event-2.jpg')
        // },
        // {
        //     title: "ServiceNow24 | Live Event",
        //     description: "Digital transformation can seem like a clear path forward, but navigating change across a complex ….",
        //     dateLocation: "7 - 9 May 2024 Las Vegas, US",
        //     image: require('../../../Assets/images/event-1.jpg')
        // },

    ];

    console.log(eventsInfo);

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
                    <p>Platform Customer success Our mission and approach Resources Bizzdesign Academy EN Events Home Events Where to meet us Come and meet us at one of our events worldwide to find out how Bizzdesign and Enterprise Studio can help you design your digital business. Grab a coffee and share ideas and best practices with our experts. Take a look at our events below to see what’s happening near you. If there are no upcoming events in your area, then join the discussion on <a href='#'>LinkedIn</a> or <a href='#'>Twitter</a></p>
                </div>
            </div>

            <div className='Event-hero'>
                <div className='current-event'>
                    {eventsInfo.length !== 0 &&
                        <center>
                            <h1><span>Join us</span> at these Events!</h1>
                        </center>
                    }
                    <div className='current-event-list'>
                        {eventsInfo.length === 0 ? (
                            <h2 style={{width:"100vw",margin:"4rem"}}>No events available at the moment. Please check back later.</h2>
                        ) : (
                            eventsInfo.map((event, index) => (
                                <div className="card mb-1" key={index}>
                                    <img src={event.image} className="card-img-top" alt={event.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text">{event.description}</p>
                                        <p className="card-text"><small className="text-body-secondary">{event.dateLocation}</small></p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
