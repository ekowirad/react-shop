
const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_ACTION_SAVE':
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};