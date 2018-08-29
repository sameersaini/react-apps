import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div><h4>Kindly select a book</h4></div>;
        }
        return (
            <div>
                <h4>Details of the Book:</h4>
                <div>
                    Title : <b>{this.props.book.title}</b>
                </div>
                <div>Pages : <i>{this.props.book.pages}</i></div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        book: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail);
