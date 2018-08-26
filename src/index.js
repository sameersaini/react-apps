import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBWv_U6vfEdx02ZzZguTtECzP5A4rv6LWI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleVideoSelect = this.handleVideoSelect.bind(this);

        this.handleSearch('News India', true);
    }

    handleSearch(value, selSelected = false) {
        YTSearch({ key: YOUTUBE_API_KEY, term: value }, (videos) => {
            const newState = { videos };
            if (selSelected) { newState[selectedVideo] = videos[0]; }

            this.setState(newState);
        });
    }

    handleVideoSelect(selectedVideo) {
        this.setState({ selectedVideo });
    }

    render() {
        const handleSearch = _.debounce(this.handleSearch, 300);
        return (
            <div>
                <SearchBar onSearchChange={handleSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect}/>
            </div>);
    }
}

// generate the html and put it onto the page.
ReactDOM.render(<App />, document.getElementById('root'));
