const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SAVE':
      return {
        ...state,
        currentUser: action.payload
      };
    case 'USER_REMOVE':
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};