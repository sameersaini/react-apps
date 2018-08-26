import React, { Component } from 'react';


function VideoDetail(props) {
    const videoId = props.video ? props.video.id.videoId : null;
    const url = `https://www.youtube.com/embed/${videoId}`;


    if (videoId === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowFullScreen>
                </iframe>
            </div>
            <div className="detail">
                <div >{props.video.snippet.title}</div>
                <div >{props.video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;
