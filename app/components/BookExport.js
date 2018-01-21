// React
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// JSZip
import JSZip from "jszip";
// Filesaver
import FileSaver from 'filesaver.js-npm';

const BOOK_TYPES = ['book', 'rich_book', 'note', 'pad'];

class BookExport extends Component {
    makeFile(book) {
        return {
            filename: `${book.name}.txt`,
            content: `#!${BOOK_TYPES[book.type]}\n${book.title}\n${book.text}`
        }
    }

    fillZip(zip) {
        const { books } = this.props;

        books.map((book) => {
            const { filename, content } = this.makeFile(book);

            zip.file(filename, content);
        });
    }

    startExport() {
        const { changeLoadingStatus } = this.props;
        let zip = new JSZip();

        changeLoadingStatus();
        this.fillZip(zip);
        zip.generateAsync({type:"blob"})
            .then(function(content) {
                FileSaver.saveAs(content, "books.zip");
                changeLoadingStatus();
            });
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div className='book-export'>
                <button className="book-export-button" onClick={() => this.startExport()}>
                    {isLoading ? 'Выполняю...' : 'Экспортировать'}
                </button>
            </div>
        )
    }
}

// Actions
import { changeLoadingStatus } from '../actions/processStatus'

const mapDispatchToProps = dispatch => ({
    changeLoadingStatus: bindActionCreators(changeLoadingStatus, dispatch),
});

const mapStateToProps = state => ({
    books: state.books.books,
    isLoading: state.processStatus.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookExport)