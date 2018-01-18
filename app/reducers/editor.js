const initialState = {
    hidden: false,
    editing: false,
    editingId: null
};

const editor = (state = initialState, action) => {
    switch (action.type) {
        case 'START_EDITING': {
            return({
                ...state,
                editing: true,
                editingId: action.payload.id
            })
        }
        case 'END_EDITING': {
            return({
                ...state,
                editing: false,
                editingId: null
            })
        }
        case 'SHOW_ELEMENTS': {
            return({
                ...state,
                hidden: !state.hidden
            })
        }
        case 'HIDE_ELEMENTS': {
            return({
                ...state,
                hidden: state.hidden
            })
        }
        default:
            return state
    }
};

export default editor