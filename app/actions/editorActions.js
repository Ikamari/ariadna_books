export const startEditing = (id) => ({
    type: 'START_EDITING',
    payload: {
        id
    }
});

export const endEditing = () => ({
    type: 'END_EDITING',
});

export const showElements = (index) => ({
    type: 'SHOW_ELEMENTS',
});

export const hideElements = (index) => ({
    type: 'HIDE_ELEMENTS',
});
