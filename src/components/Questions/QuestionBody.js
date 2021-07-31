import { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getQuestion, solveQuestion } from '../../actions/questions';
import Spinner from '../layout/Spinner';

import QuestionUser from './QuestionUser';
import QuestionAnswered from './QuestionAnswered';

const QuestionBody = ({
  match,
  user,
  getQuestion,
  solveQuestion,
  question,
}) => {
  useEffect(() => {
    getQuestion(match.params.question_id);
    // eslint-disable-next-line
  }, []);

  const [value, setValue] = useState('');

  const handlerOnChange = (e) => {
    setValue(e.target.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    const answer = {
      authedUser: user.id,
      qid: question.id,
      answer: value,
    };

    solveQuestion(answer);
  };

  const unansweredQuestion = () => (
    <form onSubmit={(e) => handlerOnSubmit(e)}>
      <ul className='question-body-votes lead list-unstyled'>
        <li className='form-check form-switch'>
          <input
            type='radio'
            name='option'
            value='optionOne'
            id='__optionOne'
            checked={value === 'optionOne'}
            className='form-check-input'
            onChange={(e) => handlerOnChange(e)}
          />
          <label htmlFor='__optionOne' className='form-check-label'>
            {question.optionOne.text}
          </label>
        </li>
        <li className='form-check form-switch'>
          <input
            type='radio'
            name='option'
            value='optionTwo'
            id='__optionTwo'
            checked={value === 'optionTwo'}
            className='form-check-input'
            onChange={(e) => handlerOnChange(e)}
          />
          <label htmlFor='__optionTwo' className='form-check-label'>
            {question.optionTwo.text}
          </label>
        </li>
      </ul>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );

  const answeredQuestion = () => (
    <Fragment>
      <QuestionAnswered question={question} optionChoice='optionOne' />
      <QuestionAnswered question={question} optionChoice='optionTwo' />
    </Fragment>
  );

  return question === null ? (
    <Spinner />
  ) : (
    <section>
      <div className='container-fluid'>
        <div className='block'>
          <div className='question-body'>
            <div className='question-inner row g-0'>
              <div className='col-md-8'>
                <div className='question'>
                  <div className='title'>
                    <strong>Would You Rather...?</strong>
                  </div>
                  {question.votes ? answeredQuestion() : unansweredQuestion()}
                </div>
              </div>
              <div className='col-md-4'>
                <QuestionUser
                  user={question.user}
                  timestamp={question.timestamp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

QuestionBody.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  question: state.questions.question,
});

export default connect(mapStateToProps, { getQuestion, solveQuestion })(
  QuestionBody
);
