const initialState = {
    player: null,
    computer: null,
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
                player: action.player,
                computer: action.player === 'X' ? 
                    'O' : 
                    action.player === 'O' ?
                    'X' : 
                    null
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

export const getPlayer = state => state.tactoeReducer.player;
export const currentBoard = state => state.tactoeReducer.board;