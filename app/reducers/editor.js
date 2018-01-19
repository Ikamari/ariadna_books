const initialState = {
    editingId: null
};

const editor = (state = initialState, action) => {
    switch (action.type) {
        case 'START_EDITING': {
            return({
                editingId: action.payload.id
            })
        }
        case 'FINISH_EDITING': {
            return({
                editingId: null
            })
        }
        default:
            return state
    }
};

export default editor