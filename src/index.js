import React from 'react';
import ReactDOM from 'react-dom';


// create a new component which contains HTML
const App = () => {
    return (
        <div>
            Hello world
        </div>
    );
};

// generate the html and put it onto the page.
ReactDOM.render(<App />, document.getElementById('root'));
