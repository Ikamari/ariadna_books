// React
import React, { Component } from 'react'
// Components
import FileLoader from './components/BookLoader'
import BookList from './components/BookTable'
import BookEditor from './components/BookEditor'

export default  class App extends Component {
    render() {
        return(
            <div className="app">
                <FileLoader extension='yml'/>
                <BookList/>
                <BookEditor/>
            </div>
        )
    }
}
