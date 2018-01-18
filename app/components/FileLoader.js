// React
import React, { Component } from "react";
import PropTypes from "prop-types"
// Redux
import { connect } from "react-redux";

class FileLoader extends Component {
    getFilesFromInput (inputData) {
        const { returnPath, extension } = this.props;
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
        console.log(validFiles);

        //Will convert files to dataURL
        let reader = new FileReader(), filesToReturn = {}, counter = 0;
        const saveFile = () => {
            returnPath(validFiles, fileNum);
        };
        saveFile();
    }

    checkFileExtension(file, requiredExtension) {
        const fileExtension = file.name.split('.').pop();
        return fileExtension === requiredExtension;
    }

    render() {
        const { skinsAreLoading, partsAreLoading, exporting } = this.props.processStatus;
        return (
            <div>
                <label
                    className={"file-upload-button" + ((skinsAreLoading || partsAreLoading || exporting) ? " unactive" : "")}
                    htmlFor={(skinsAreLoading || partsAreLoading) ? "" : "file-upload"}
                >Загрузить</label>
                <input id="file-upload" name="files" onChange={(event) => {
                    event.preventDefault();
                    console.log("Loaded files:", event.target.files);
                    this.getFilesFromInput(event.target.files)
                }} type="file" multiple/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    processStatus: state.processStatus,
});

FileLoader.propTypes = {
    extension: PropTypes.string,
    returnPath: PropTypes.func.isRequired
};

FileLoader.defaultProps = {
    extension: null,
};

export default connect(mapStateToProps)(FileLoader)