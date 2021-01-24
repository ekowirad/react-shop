export const setCurrentUser = (user) => ({
    type: 'USER_SAVE',
    payload: user
})

export const removeCurrentUser = () => ({
    type: 'USER_REMOVE'
})