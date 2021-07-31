import {
  GET_QUESTIONS,
  GET_QUESTION,
  ADD_QUESTION,
  SOLVE_QUESTION,
} from '../actions/types';

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
    case SOLVE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((el) => {
          if (payload.qid === el.id) {
            el = {
              ...el,
              [payload.answer]: {
                ...el[payload.answer],
                votes: [payload.authedUser, ...el[payload.answer].votes],
              },
            };
          }
          return el;
        }),
        // question: {
        //   ...state.question,
        //   [payload.answer]: {
        //     ...state.question[payload.answer],
        //     votes: [
        //       payload.authedUser,
        //       ...state.question[payload.answer].votes,
        //     ],
        //   },
        // },
      };
    default:
      return state;
  }
}

export default questionsReducer;
