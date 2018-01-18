// React
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const BOOK_TYPES = ['book', 'rick_book', 'note', 'pad']

class BookTable extends Component {
    drawBookElement(bookData, index) {
        return (
            <div className='book-table-element' key={`book-${index}`}>
                <span className='book-index'>{index}</span>
                <span className='book-title'>{bookData.title}</span>
                <span className='book-type'>{BOOK_TYPES[bookData.type]}</span>
                <div className='button-wrapper'>
                    <div className='edit-button'>Изменить</div>
                </div>
                <div className='button-wrapper'>
                    <div className='remove-button'>Удалить</div>
                </div>
            </div>
        )
    }

    render() {
        const { books } = this.props;
        console.log("***", books);
        return (
            <div className='book-table'>
                <div className='book-table-element'>
                    <span className='book-index'>ID</span>
                    <span className='book-title'>Название</span>
                    <span className='book-type'>Тип</span>
                    <div className='button-wrapper'/>
                    <div className='button-wrapper'/>
                </div>
                {books.map((bookData, index) => this.drawBookElement(bookData, index))}
            </div>
        )
    }
}

// Actions
import { removeBook } from '../actions/booksActions'

const mapDispatchToProps = dispatch => ({
    removeBook: bindActionCreators(removeBook, dispatch),
});

const mapStateToProps = state => ({
    books: state.books.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTable)