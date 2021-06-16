import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  if (action.type === actionTypes.LOGIN_USER) {
    return { ...action.user.user, token: action.user.token };
  }
  return user;
}
export default userReducer;
