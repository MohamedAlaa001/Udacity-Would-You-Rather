import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getQuestions } from '../../actions/questions';

import Spinner from '../layout/Spinner';
import PollsFilter from './PollsFilter';
import QuestionItem from '../Questions/QuestionItem';

const Home = ({ getQuestions, questions, loading, user }) => {
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  const [pollsFilter, setPollsfilter] = useState({
    answered: false,
    unanswered: true,
  });

  const { answered, unanswered } = pollsFilter;

  return questions === null && loading ? (
    <Spinner />
  ) : (
    <section>
      <div className='container-fluid'>
        <div className='block'>
          <div className='title'>
            <strong>Polls</strong>
          </div>

          {/* filter polls, Default should be answered */}
          <PollsFilter
            pollsFilter={pollsFilter}
            setPollsfilter={setPollsfilter}
          />
          <div className='questions-block'>
            {unanswered && (
              <Fragment>
                <div className='title'>
                  <strong>Unanswered Questions</strong>
                </div>
                {questions.map(
                  (question) =>
                    !user.answers[question.id] && (
                      <QuestionItem key={question.id} question={question} />
                    )
                )}
              </Fragment>
            )}
            {answered && (
              <Fragment>
                <div className='title'>
                  <strong>Answered Questions</strong>
                </div>
                {questions.map(
                  (question) =>
                    user.answers[question.id] && (
                      <QuestionItem key={question.id} question={question} />
                    )
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  questions: PropTypes.array,
  loading: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  loading: state.questions.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getQuestions })(Home);
