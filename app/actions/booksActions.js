export const addBook = (type, name, title, text) => ({
    type: 'ADD_BOOK',
    payload: {
        type,
        name,
        title,
        text
    }
});

export const editBook = (type, name, title, text, index) => ({
    type: 'EDIT_BOOK',
    payload: {
        type,
        name,
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