import { Board } from '../engine/lib/engine';

const initState = {
    board: new Board()
};

export const changeView = (view) => {
    return { type: 'GAME_MOVE', index };
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GAME_MOVE': {
            return { ...state, board: state.board.set(action.index) }
        }
    }
}

export default reducer;