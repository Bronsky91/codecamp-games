const initialState = {
    value: null,
    player: null,
    board: {
        0: null, 1: null, 2: null,
        3: null, 4: null, 5: null,
        6: null, 7: null, 8: null
    }
  };

export default (state = initialState, action) => {
    switch(action.type) {
        case 'X_OR_O':
            return {
                ...state,
                player: action.player
            }
        case 'PLAYER_MOVE':
            return {
                ...state,
                board: {
                    ...state.board,
                    [action.index]: action.player
                }
            }
        default: 
            return state;
    }
}

export const getValue = state => state.tactoeReducer.value;
export const getPlayer = state => state.tactoeReducer.player;
export const currentBoard = state => state.tactoeReducer.board;