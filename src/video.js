import React from 'react';
import './styles/video.css';

const VideoComponent = ({ videoUrl }) => {
    return (
        <div className="video-banner">
            <video className="video-element" src={videoUrl} autoPlay loop muted />
            <div className="video-overlay">
                <div className="video-info">
                    <img src="./images/image2.png" alt="Movie Poster" className="video-poster" />
                    <div className="video-buttons">
                        <button className="watch-now-btn">Watch Now</button>
                        <button className="more-info-btn">More Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
