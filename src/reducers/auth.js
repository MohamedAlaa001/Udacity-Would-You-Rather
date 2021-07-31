import {
  LOGIN,
  LOGOUT,
  GET_USERS,
  ADD_USER_QUESTION,
  ADD_USER_QUESTION_ANSWER,
} from '../actions/types';

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
    case ADD_USER_QUESTION:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === payload.authedUser) {
            el = {
              ...el,
              questions: [...el.questions, payload.id],
            };
          }
          return el;
        }),
        user: {
          ...state.user,
          questions: [...state.user.questions, payload.id],
        },
      };
    case ADD_USER_QUESTION_ANSWER:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === payload.authedUser) {
            el = {
              ...el,
              answers: {
                ...el.answers,
                [payload.qid]: payload.answer,
              },
            };
          }
          return el;
        }),
        user: {
          ...state.user,
          answers: {
            ...state.user.answers,
            [payload.qid]: payload.answer,
          },
        },
        loading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
