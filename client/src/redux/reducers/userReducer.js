import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return { ...action.user.user, token: action.user.token };
    default:
      return user;
  }
}
export default userReducer;
