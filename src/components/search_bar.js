import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { inputVal: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({
            inputVal: event.target.value,
        });
    }

    render() {
        return <input value={this.state.inputVal} onChange={this.onInputChange}/>;
    }
}

export default SearchBar;
