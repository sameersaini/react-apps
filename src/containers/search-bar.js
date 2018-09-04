import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '', country: 'us' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onCountryChange(event) {
        this.setState({ country: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} style={{ marginTop: '1rem' }}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Search City"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div className="form-group col-md-5">
                        <select
                            value={this.state.country}
                            onChange={this.onCountryChange}
                            className="form-control"
                            style={{ height: '38px' }}>
                            <option value="us">Select Country (Default US)</option>
                            <option value="in">India</option>
                            <option value="us">US</option>
                            <option value="uk">UK</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2 offset-md-1">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps({ error }) {
    return { error };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
