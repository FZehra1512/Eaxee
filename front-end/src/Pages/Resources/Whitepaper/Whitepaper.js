import React, { useEffect } from 'react'
import '../Whitepaper/Whitepaper.css'

// TODO: 1. replace dummy data with real data that is in whitepaper-card

const Whitepaper = () => {

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
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-1.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-2.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-3.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-4.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-5.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-6.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-2.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-1.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-4.jpg')} class="card-img-bottom" alt="..." />
                </div>
                <div class="whitepaper-card">
                    <div class="card-body">
                        <h5 class="card-title">Enterprise Architecture Tools</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <img src={require('../../../Assets/images/whitepaper-3.jpg')} class="card-img-bottom" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
