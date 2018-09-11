import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchPosts, createPosts, deletePosts } from '../actions';
import PostItem from './post_item';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.renderList = this.renderList.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleDeleteClick(event, key) {
        this.props.deletePosts(key);
    }

    renderList() {
        return _.map(this.props.posts, (value, key) => (
            <PostItem key={key} id={key} text={value}/>
        ));
    }

    submitPost(event) {
        event.preventDefault();
        this.props.createPosts(this.state.value);
        this.setState({ value: '' });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={this.submitPost}>
                    <div className="form-group row">
                        <div className="col-sm-3">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.value}
                                placeholder="Add text"
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
                <hr />
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts, createPosts, deletePosts })(App);
