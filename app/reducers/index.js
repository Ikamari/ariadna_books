//Redux
import { combineReducers } from 'redux';
//Reducers
import processStatus from './processStatus';
import editor from './editor';
import books from './books'
import other from './other';

export default combineReducers({
    processStatus,
    other,
    books,
    editor
})