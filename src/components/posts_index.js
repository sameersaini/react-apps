import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        };
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.filter(this.props.posts, post => post.title).map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h4>Posts</h4>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);