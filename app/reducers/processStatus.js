const initialState = {
    loading: false
};

const processStatus = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LOADING_STATUS':
            console.log("Changed loading status");
            return {exporting: !state.exporting};
        default:
            return state
    }
};
export default processStatus