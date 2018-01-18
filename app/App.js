// React
import React, { Component } from 'react'
// Components
import FileLoader from './components/BookLoader'
import BookList from './components/BookList'

export default  class App extends Component {
    render() {
        return(
            <div>
                <FileLoader extension='yml'/>
                <BookList/>
            </div>
        )
    }
}
