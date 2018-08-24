import React from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = 'AIzaSyBWv_U6vfEdx02ZzZguTtECzP5A4rv6LWI';

// create a new component which contains HTML
const App = () => (<div> Hello world</div>);


// generate the html and put it onto the page.
ReactDOM.render(<App />, document.getElementById('root'));
