import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ value: event.target.value });
        this.props.onSearchChange(event.target.value);
    }

    render() {
        return (
            <div className="search-bar ">
                <input value={this.state.value} className="col-md-8" onChange={this.onInputChange} placeholder="Search "/>
            </div>
        );
    }
}

export default SearchBar;
