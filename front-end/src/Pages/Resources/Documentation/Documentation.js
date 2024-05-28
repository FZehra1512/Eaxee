import React, { useEffect } from 'react'
import '../Documentation/Documentation.css'

// TODO: 1. replace dummy data with real data that is in Documentation-card

const Documentation = () => {

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
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">Getting Started</h6>
                        <p class="card-text">Learn the essentials to embark on your journey with Eaxee.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">Meta Model</h6>
                        <p class="card-text">Dicover modelling best practices for your enterprise architecture setup.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">Use Cases</h6>
                        <p class="card-text">Explore practical scenarios with Eaxee, such as Application Portfolio Assessment and more.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">User Guide</h6>
                        <p class="card-text">Deep dive into the key features, such as, inventory, Reports, Diagrams, and more.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">Out-of-the-box Integration</h6>
                        <p class="card-text">Configure integrations with external systems using our ready-made soutions.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="m-3 card-title">Developer documentation</h6>
                        <p class="card-text">Leverage our developer resources to unleash extra value for your organization.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documentation
