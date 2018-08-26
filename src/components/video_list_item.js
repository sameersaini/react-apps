import React, { Component } from 'react';


class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.video.snippet.thumbnails.default.url;
        this.heading = this.props.video.snippet.title;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        return (
            <li onClick={this.handleClick} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.heading}</div>
                    </div>
                </div>

            </li>
        );
    }
}

export default VideoListItem;
