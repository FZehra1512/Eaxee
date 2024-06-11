import React from 'react';
import '../Videos/Video.css';

const SingleVideo = ({ source, para }) => {
    return (
        <div className='video'>
            <iframe
                width="390"
                height="215"
                src={source}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <p>{para}</p>
        </div>
    );
}

export default SingleVideo;
