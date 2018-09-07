import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import Heading from './heading';

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
        return _.filter(this.props.posts, post => post.title).map(post => (
            <li className="list-group-item" key={post.id}>
                {post.title}
            </li>
        ));
    }

    render() {
        return (
            <div>
                <Heading text="Posts"/>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to='/posts/new'>
                        Add Post
                    </Link>
                </div>
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
