const initState = {
    view: 'index'
};

export const changeView = (view) => {
    return { type: 'CHANGE_VIEW', view };
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW': {
            return { ...state, view: action.view }; 
        }
        default:
            return state;
    }
}

export default reducer;