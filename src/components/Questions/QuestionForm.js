import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { addQuestion } from '../../actions/questions';

import Spinner from '../layout/Spinner';

const QuestionForm = ({ user, addQuestion }) => {
  const [data, setData] = useState({
    optionOne: '',
    optionTwo: '',
  });

  const history = useHistory();

  const { optionOne, optionTwo } = data;

  const handlerOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    const question = {
      author: user.id,
      optionOneText: optionOne.trim(),
      optionTwoText: optionTwo.trim(),
    };

    addQuestion(question);
    history.push('/dashboard');
  };
  return user === null ? (
    <Spinner />
  ) : (
    <section>
      <div className='container-fluid'>
        <div className='block'>
          <div className='title'>
            <strong>Would You Rather...?</strong>
          </div>
          <form onSubmit={(e) => handlerOnSubmit(e)}>
            <div className='mb-3'>
              <label className='form-label'>Option One</label>
              <input
                type='text'
                name='optionOne'
                value={optionOne}
                className='form-control'
                onChange={(e) => handlerOnChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Option Two</label>
              <input
                type='text'
                name='optionTwo'
                value={optionTwo}
                className='form-control'
                onChange={(e) => handlerOnChange(e)}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={!optionOne.trim() || !optionTwo.trim()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

QuestionForm.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { addQuestion })(QuestionForm);
