const initialState = {
    books: []
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK': {
            const bookData = {
                type: action.payload.type,
                title: action.payload.text,
                text: action.payload.text
            };
            let books = state.books;

            books.push(bookData);
            return({books: books})
        }
        case 'EDIT_BOOK': {
            const bookData = {
                type: action.payload.type,
                title: action.payload.text,
                text: action.payload.text
            };
            let books = state.books;

            books[action.payload.index] = bookData;
            return({books: books})
        }
        case 'REMOVE_BOOK': {
            let books = state.books;

            books.splice(action.payload.index, 1);
            return({books: books})
        }
        case 'REMOVE_ALL_BOOKS': {
            return({books: []})
        }
    }
}

export default books