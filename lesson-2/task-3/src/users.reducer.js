const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case 'DELETE_USER':
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default usersReducer;