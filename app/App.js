//React
import React, { Component } from 'react';
//File loader
import FileLoader from './components/FileLoader'

export default  class App extends Component {
    readFile(files, filenum) {
        const fileReader = new FileReader;
        fileReader.onload = (e) => {
            const content = e.target.result;
            const lines = content.split('\n');
        };
        fileReader.readAsText(files[0])
    }

    render() {
        return(
            <div>
                <FileLoader extension='yml' returnPath={(files, fileNum) => this.readFile(files, fileNum)}/>
            </div>
        )
    }
}
