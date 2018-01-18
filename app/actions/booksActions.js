export const addBook = (type, title, text) => ({
    type: 'ADD_BOOK',
    payload: {
        type,
        title,
        text
    }
});

export const editBook = (type, title, text, index) => ({
    type: 'EDIT_BOOK',
    payload: {
        type,
        title,
        text,
        index
    }
});

export const removeBook = (index) => ({
    type: 'REMOVE_BOOK',
    payload: {
        index
    }
});

export const removeAllBooks = () => ({
    type: 'REMOVE_ALL_BOOKS'
});