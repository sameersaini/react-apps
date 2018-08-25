import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBWv_U6vfEdx02ZzZguTtECzP5A4rv6LWI';

// create a new component which contains HTML
const App = () => (
    <div>
        <SearchBar/>
    </div>
);


// generate the html and put it onto the page.
ReactDOM.render(<App />, document.getElementById('root'));
