
export const playerChoice = player => ({
    type: 'X_OR_O',
    player
})

export const playerMove = (index, player) => ({
    type: 'PLAYER_MOVE',
    index,
    player
})
