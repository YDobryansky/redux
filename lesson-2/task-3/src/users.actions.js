const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  };
};

const deleteUser = (userId) => {
  return {
    type: 'DELETE_USER',
    payload: userId
  };
};

export { addUser, deleteUser };