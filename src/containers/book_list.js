import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => <li
            onClick={() => this.props.selectBook(book)}
            key={book.title}
            className="list-group-item">
            {book.title}
        </li>);
    }

    render() {
        return <ul className="list-group col-md-3">
            {this.renderList()}
        </ul>;
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

/*
 * anything returned from this function will end up as props
 * on the BookList container
 */
function mapDispatchToProps(dispatch) {
    /*
     * whenever selectBook is called, the result should be passed
     * to all of our reducers
     */
    return bindActionCreators({ selectBook }, dispatch);
}

/*
 * connect do the magic. make 'return from the params' available as a prop.
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
