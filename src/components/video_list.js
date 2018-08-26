import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videosList = this.props.videos.map(video => <VideoListItem video={video} key={video.etag} onVideoSelect={this.props.onVideoSelect}/>);

        return (
            <ul className='col-md-4 list-group'>
                {videosList}
            </ul>
        );
    }
}

export default VideoList;
