import { LOGIN, LOGOUT, GET_USERS } from '../actions/types';

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
  users: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: state.users.find((user) => user.id === payload),
      };

    case GET_USERS:
      return {
        ...state,
        users: Object.keys(payload).map((user) => payload[user]),
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        loading: true,
        user: null,
        users: null,
      };
    default:
      return state;
  }
}

export default authReducer;
