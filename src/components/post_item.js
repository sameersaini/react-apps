import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePosts } from '../actions/index';


class PostItem extends Component {
    handleClick() {
        this.props.deletePosts(this.props.id);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.text}
                <button
                    onClick={this.handleClick.bind(this)}
                    className="btn btn-danger btn-sm pull-xs-right">
                    Delete
                </button>
            </li>
        );
    }
}

export default connect(null, { deletePosts })(PostItem);
