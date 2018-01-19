// React
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const BOOK_TYPES = ['book', 'rick_book', 'note', 'pad'];

class BookEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEdited: null
        }
    }

    setFieldsData(id) {
        const { books } = this.props;
        const form = this.refs.editor;

        form.bookType.value = books[id].type;
        form.bookName.value = books[id].name;
        form.bookTitle.value = books[id].title;
        form.bookText.value = books[id].text;
    }

    getFieldsData() {
        const form = this.refs.editor;
        return ({
            type: form.bookType.value ? form.bookType.value : '0',
            name: form.bookName.value ? form.bookName.value : 'Безымянная книга',
            title: form.bookTitle.value ? form.bookTitle.value : 'Какая-то книга',
            text: form.bookText.value ? form.bookText.value : 'Эта книга оказалась пустой...'
        })
    }

    acceptChanges(id, e) {
        e.preventDefault();

        const { editBook } = this.props;
        const {type, name, title, text} = this.getFieldsData();

        editBook(type, name, title, text, id);
        this.clearFields(e)
    }

    saveBook(e) {
        e.preventDefault();

        const { addBook } = this.props;
        const {type, name, title, text} = this.getFieldsData();

        addBook(type, name, title, text);
        this.clearFields(e)
    }

    clearFields(e) {
        e.preventDefault();

        const { finishEditing } = this.props;
        const form = this.refs.editor;

        this.setState({lastEdited: null});
        form.reset();
        finishEditing()
    }

    renderBookTypeRadio(text, index) {
        return(
            <div className='book-type-option' key={`book-type-option-${index}`}>
                <label>{text}
                    <input type="radio" name="bookType" value={index}/>
                    <span />
                </label>
            </div>
        )
    }

    render() {
        const { editingId } = this.props.editor;
        const { lastEdited } = this.state;

        if(editingId !== null && editingId !== lastEdited) {
            this.setState({lastEdited: editingId});
            this.setFieldsData(editingId);
        }

        return (
            <div className='book-editor-wrapper'>
                <form className={'book-editor'} ref='editor'>
                    <input placeholder='Название файла' name='bookName'/>
                    <input placeholder='Название книги' name='bookTitle'/>
                    <textarea placeholder='Текст' name='bookText'/>
                    <div className='book-type-select'>
                        <span className='book-type-select-label'>Тип:</span>
                        {BOOK_TYPES.map((text, index) => this.renderBookTypeRadio(text, index))}
                    </div>
                    <button className='add-book-button'
                            onClick={editingId !== null ? (e) => this.acceptChanges(editingId, e) : (e) => this.saveBook(e)}>
                        {editingId !== null ? `Применить изменения (id: ${editingId})` : 'Создать книгу'}
                    </button>
                    <button className='cancel-book-button'
                            onClick={(e) => this.clearFields(e)}>
                        {editingId !== null ? 'Отменить изменения' : 'Очистить'}
                    </button>
                </form>
            </div>
        )
    }
}

// Actions
import { addBook, editBook } from '../actions/booksActions'
import { startEditing, finishEditing } from '../actions/editorActions'

const mapDispatchToProps = dispatch => ({
    addBook: bindActionCreators(addBook, dispatch),
    editBook: bindActionCreators(editBook, dispatch),
    startEditing: bindActionCreators(startEditing, dispatch),
    finishEditing: bindActionCreators(finishEditing, dispatch),
});

const mapStateToProps = state => ({
    books: state.books.books,
    editor: state.editor
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEditor)