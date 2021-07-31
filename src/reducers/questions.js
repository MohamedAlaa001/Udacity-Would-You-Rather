import { GET_QUESTIONS, GET_QUESTION, ADD_QUESTION } from '../actions/types';

const initialState = {
  questions: null,
  question: null,
  loading: true,
};

function questionsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false,
      };
    case GET_QUESTION:
      return {
        ...state,
        question: payload,
        loading: false,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [payload, ...state.questions],
        loading: false,
      };
    default:
      return state;
  }
}

export default questionsReducer;
