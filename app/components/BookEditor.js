// React
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const BOOK_TYPES = ['book', 'rick_book', 'note', 'pad'];

class BookEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { books } = this.props;
        const { hidden, editing, editingId } = this.props.editor;
        return (
            <div className='book-editor-wrapper'>
                <div className='book-editor'>

                </div>
            </div>
        )
    }
}

// Actions
import { addBook, editBook } from '../actions/booksActions'

const mapDispatchToProps = dispatch => ({
    addBook: bindActionCreators(addBook, dispatch),
    editBook: bindActionCreators(editBook, dispatch),
});

const mapStateToProps = state => ({
    books: state.books.books,
    editor: state.editor
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEditor)