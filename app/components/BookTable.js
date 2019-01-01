// React
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const BOOK_TYPES = ['regular', 'rich_book', 'note', 'pad'];

class BookTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hiddenTableElements: false
        }
    }

    drawBookElement(bookData, index) {
        const { removeBook, startEditing } = this.props;
        return (
            <div className='book-table-element' key={`book-${index}`}>
                <span className='book-index'>{index}</span>
                <span className='book-title'>{bookData.name}</span>
                <span className='book-title'>{bookData.title}</span>
                <span className='book-type'>{BOOK_TYPES[bookData.type]}</span>
                <div className='button-wrapper'>
                    <div className='book-table-edit-button' onClick={() => startEditing(index)}>Изменить</div>
                </div>
                <div className='button-wrapper'>
                    <div className='book-table-remove-button' onClick={() => removeBook(index)}>Удалить</div>
                </div>
            </div>
        )
    }

    hideTableElements() {
        this.setState({
            hiddenTableElements: !this.state.hiddenTableElements
        })
    }

    render() {
        const { books } = this.props;
        const hidden = this.state.hiddenTableElements;
        return (
            <div className='book-table-wrapper'>
                <div className={'book-table' + (hidden ? ' hidden-elements' : '')}>
                    {!hidden ?
                        <div className='book-table-element'>
                            <span className='book-index'>ID</span>
                            <span className='book-name'>Название файла</span>
                            <span className='book-title'>Название книги</span>
                            <span className='book-type'>Тип</span>
                            <div className='button-wrapper'/>
                            <div className='button-wrapper'>
                                <div className='book-table-hide-button' onClick={() => this.hideTableElements()}>Скрыть</div>
                            </div>
                        </div> :
                        <div className='button-wrapper'>
                            <div className='book-table-hide-button' onClick={() => this.hideTableElements()}>Показать книги</div>
                        </div>
                    }
                    {!hidden ?
                        books.map((bookData, index) => this.drawBookElement(bookData, index)) : null}
                </div>
            </div>
        )
    }
}

// Actions
import { removeBook } from '../actions/booksActions'
import { startEditing } from '../actions/editorActions'

const mapDispatchToProps = dispatch => ({
    removeBook: bindActionCreators(removeBook, dispatch),
    startEditing: bindActionCreators(startEditing, dispatch)
});

const mapStateToProps = state => ({
    books: state.books.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTable)