import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getQuestion } from '../../actions/questions';
import Spinner from '../layout/Spinner';

const QuestionBody = ({ match, getQuestion, question }) => {
  useEffect(() => {
    getQuestion(match.params.question_id);
    // eslint-disable-next-line
  }, []);

  return question === null ? (
    <Spinner />
  ) : (
    <section>
      <div className='container-fluid'>
        <div className='block'>
          <div className='question-body'>
            <div className='question-inner'>
              <div className='question-user'>
                <img src={question.user.avatarURL} alt='' />

                <div className='mt-3'>By {question.user.name}</div>
              </div>
              <div className='question'>
                <div className='title'>
                  <strong>Would You Rather...?</strong>
                </div>
                <div
                  style={
                    question.votes && question.votes.choice === 'optionOne'
                      ? {
                          color: 'var(--bs-success)',
                        }
                      : null
                  }
                >
                  Option One:
                  <strong className='d-block ms-4'>
                    {question.optionOne.text}
                  </strong>
                  {question.votes && (
                    <div className='votes mt-2'>
                      <div>Votes: {question.votes.optionOne.count}</div>
                      <div>
                        Percentage: {question.votes.optionOne.percentage}%
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${question.votes.optionOne.percentage}%`,
                            background: 'var(--color-primary)',
                          }}
                          aria-valuenow={question.votes.optionOne.percentage}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          {question.votes.optionOne.percentage}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className='mt-2'
                  style={
                    question.votes && question.votes.choice === 'optionTwo'
                      ? {
                          color: 'var(--bs-success)',
                        }
                      : null
                  }
                >
                  Option Two:
                  <strong className='d-block ms-4'>
                    {question.optionTwo.text}
                  </strong>
                  {question.votes && (
                    <div className='votes mt-2'>
                      <div>Votes: {question.votes.optionTwo.count}</div>
                      <div>
                        Percentage: {question.votes.optionTwo.percentage}%
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${question.votes.optionTwo.percentage}%`,
                            background: 'var(--color-primary)',
                          }}
                          aria-valuenow={question.votes.optionTwo.percentage}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          {question.votes.optionTwo.percentage}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
  users: state.auth.users,
  question: state.questions.question,
});

export default connect(mapStateToProps, { getQuestion })(QuestionBody);
