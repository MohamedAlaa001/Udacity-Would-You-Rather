import { LOGIN, LOGOUT, GET_USERS } from '../actions/types';
import * as API from '../_DATA';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await API._getUsers();

    dispatch({
      type: GET_USERS,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (userId) => (dispatch) => {
  try {
    dispatch({
      type: LOGIN,
      payload: userId,
    });
  } catch (err) {
    throw err;
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
