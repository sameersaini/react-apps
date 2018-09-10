import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import Heading from './heading';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    handleDelete() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        const arr = [
            <Heading text="Details" key="0"/>,
        ];
        if (!post) {
            arr.push(<div key="1">Required resource does not exist.<hr /></div>);
            arr.push(
                <div key="2" style={{ marginTop: '10px' }}>
                    <Link to="/" >Go back...</Link>
                </div>
            );
        } else {
            arr.push(
                <div key="2" style={{ marginTop: '10px', marginBottom: '25px' }}>
                    <button
                        className="btn btn-danger pull-xs-right"
                        style={{ marginLeft: '5px' }}
                        onClick={this.handleDelete.bind(this)}
                    >Delete</button>
                    <Link to="/" className="btn btn-info pull-xs-right">Back</Link>
                </div>
            );
            arr.push(
                <div key="3">
                    <h5>Title</h5>
                    {post.title}
                    <hr />
                    <h5>Categories</h5>
                    {post.categories}
                    <hr />
                    <h5>Content</h5>
                    <p className="font-italic">{post.content}</p>
                    <hr />
                </div>,
            );
        }

        return (
            <div>
                {arr}
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
