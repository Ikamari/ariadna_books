// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// Helpers
import FileDisassembler from '../helpers/BookDisassembler'

class BookLoader extends Component {
    getFilesFromInput (inputData) {
        const { extension, addBook } = this.props;
        let validFiles = {}, fileNum = 0;

        //Will remove files with wrong extension or return all files, if there in no required extension given
        if(extension) {
            for(let i = 0; i < inputData.length; i++) {
                if(this.checkFileExtension(inputData[i], extension)) {
                    validFiles[fileNum] = inputData[i];
                    fileNum++;
                }
            }
            validFiles.length = fileNum;
        } else {
            validFiles = inputData;
            fileNum = inputData.length;
        }
        console.log('Valid files: ', validFiles);

        let counter = 0;
        //Will call promises that disassemble old format books
        const saveFile = () => {
            FileDisassembler(validFiles[counter]).then((bookData) => {
                const {type, name, title, text} = bookData;

                addBook(type, name, title, text);
                counter++;
                if(counter < fileNum) {
                    saveFile()
                }
            });
        };
        saveFile();
    }

    checkFileExtension(file, requiredExtension) {
        const fileExtension = file.name.split('.').pop();
        return fileExtension === requiredExtension;
    }

    render() {
        return (
            <div className='book-loader'>
                <label
                    htmlFor={'file-upload'}
                ><div className='file-upload-button'>Загрузить</div></label>
                <input id='file-upload' className='hidden' name='files' onChange={(event) => {
                    event.preventDefault();
                    console.log('Loaded files:', event.target.files);
                    this.getFilesFromInput(event.target.files)
                }} type='file' multiple/>
            </div>
        )
    }
}

// Actions
import { addBook } from '../actions/booksActions'

const mapDispatchToProps = dispatch => ({
    addBook: bindActionCreators(addBook, dispatch),
});

const mapStateToProps = state => ({
    processStatus: state.processStatus,
});

BookLoader.propTypes = {
    extension: PropTypes.string,
};

BookLoader.defaultProps = {
    extension: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookLoader)