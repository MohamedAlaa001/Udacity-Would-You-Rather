import {
  GET_QUESTIONS,
  GET_QUESTION,
  ADD_QUESTION,
  SOLVE_QUESTION,
  ADD_USER_QUESTION_ANSWER,
  ADD_USER_QUESTION,
} from './types';
import * as API from '../_DATA';

export const getQuestions = () => async (dispatch) => {
  try {
    const res = await API._getQuestions();

    let sortedArray = Object.keys(res).map((question) => res[question]);

    sortedArray = sortedArray.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      } else if (a.timestamp > b.timestamp) {
        return -1;
      } else {
        return 0;
      }
    });

    dispatch({
      type: GET_QUESTIONS,
      payload: sortedArray,
    });
    return true;
  } catch (err) {
    console.log(err);
  }
};

export const getQuestion =
  (question_id, history) => async (dispatch, getState) => {
    let state = getState();

    if (!state.questions.questions) {
      await dispatch(getQuestions());
      state = getState();
    }
    const { auth, questions } = state;

    const question = questions.questions.find((el) => el.id === question_id);

    if (!question) {
      return history.replace('/404');
    }

    const user = auth.users.find((user) => user && user.id === question.author);

    let votes = null;

    if (auth.user.answers[question_id]) {
      const countOne = question.optionOne.votes.length;
      const countTwo = question.optionTwo.votes.length;
      votes = {
        choice: auth.user.answers[question_id],
        optionOne: {
          count: countOne,
          percentage: Math.ceil((countOne / (countOne + countTwo)) * 1000) / 10,
        },
        optionTwo: {
          count: countTwo,
          percentage: Math.ceil((countTwo / (countOne + countTwo)) * 1000) / 10,
        },
      };
    }

    dispatch({
      type: GET_QUESTION,
      payload: {
        ...question,
        user,
        votes,
      },
    });
  };

export const addQuestion = (question) => async (dispatch) => {
  try {
    const res = await API._saveQuestion(question);

    dispatch({
      type: ADD_USER_QUESTION,
      payload: { id: res.id, authedUser: question.author },
    });

    dispatch({
      type: ADD_QUESTION,
      payload: res,
    });

    alert('Question Created');
  } catch (err) {
    console.log(err);
  }
};

export const solveQuestion = (answer) => async (dispatch) => {
  try {
    await API._saveQuestionAnswer(answer);

    dispatch({
      type: ADD_USER_QUESTION_ANSWER,
      payload: {
        authedUser: answer.authedUser,
        qid: answer.qid,
        answer: answer.answer,
      },
    });

    dispatch({
      type: SOLVE_QUESTION,
      payload: answer,
    });

    dispatch(getQuestion(answer.qid));
  } catch (err) {
    console.log(err);
  }
};
