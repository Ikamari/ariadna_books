// React
import React, { Component } from 'react'
// Components
import BookLoader from './components/BookLoader'
import BookList from './components/BookTable'
import BookEditor from './components/BookEditor'
import BookExport from './components/BookExport'

export default  class App extends Component {
    render() {
        return(
            <div className="app">
                <div className='row'>
                    <BookLoader extension='yml'/>
                    <BookExport/>
                </div>
                <BookList/>
                <BookEditor/>
            </div>
        )
    }
}
