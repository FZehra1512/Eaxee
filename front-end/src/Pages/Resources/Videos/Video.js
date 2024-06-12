import React from 'react'
import '../Videos/Video.css';
import SingleVideo from "./Single_Video";
const Video = () => {
    return (
      <div className="video-container">
        <div className="demo-videos">
          <h3 className='mainHeading'>Demo Videos</h3>
          <div className="demo-videos-list">
            <SingleVideo
              source="https://www.youtube.com/embed/_v_Qk47faLM?si=IWn89zS2HPZmVTNO"
              para="Quick Access Options in the Enterprise Module"
            />
            <SingleVideo
              source="https://www.youtube.com/embed/EAXyi6npPl0?si=MG63BlvjIaMskf4q"
              para="Creating and editing objects from Traversal Tree and the History Tab"
            />
            <SingleVideo
              source="https://www.youtube.com/embed/JfhTVyMC4-E?si=hpc6UMSm_KmAYcTz"
              para="Quick Access Options in the Enterprise Module"
            />
            <SingleVideo
              source="https://www.youtube.com/embed/d-KTJnzkfqc?si=UvILaMGi0ePH2zwm"
              para="Creating new Objects in Enterprise Architecture"
            />
            <SingleVideo
              source="https://www.youtube.com/embed/6qYlbid-Puc?si=Y2SWGxa4dH8FHGvF"
              para="Create an Object in a Diagram"
            />
          </div>
        </div>
      </div>
    );
}

export default Video
