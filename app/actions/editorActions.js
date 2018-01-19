export const startEditing = (id) => ({
    type: 'START_EDITING',
    payload: {
        id
    }
});

export const finishEditing = () => ({
    type: 'FINISH_EDITING',
});

