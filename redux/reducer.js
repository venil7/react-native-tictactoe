import { Board } from '../engine/lib/engine';

const initState = {
    board: new Board()
};

const cpuMove = (board) => {
    return { type: 'CPU_MOVE', board };
}
export const humanMoveThunk = (index) => (dispatch, getState) => {
    dispatch({ type: 'HUMAN_MOVE', index });
    let board = getState().board.cpu();
    dispatch({ type: 'CPU_MOVE', board })
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'HUMAN_MOVE': {
            return { ...state, board: state.board.set(action.index) };
        }
        case 'CPU_MOVE': {
            return { ...state, board: action.board };
        }
        default:
            return state;
    }
}

export default reducer;