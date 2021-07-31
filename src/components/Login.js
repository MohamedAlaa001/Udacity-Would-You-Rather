import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import Spinner from './layout/Spinner';

import { getUsers, login } from '../actions/auth';

const Login = ({ isAuthenticated, users, login, getUsers }) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  const [userId, setUserId] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard' } };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    login(userId);
    history.replace(from);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return !users ? (
    <Spinner />
  ) : (
    <div className='login-page block'>
      <div className='title'>
        <strong>Would You Rather... ?</strong>
      </div>
      <form onSubmit={(e) => handlerOnSubmit(e)}>
        {users && (
          <select
            value={userId}
            className='form-select'
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value='' disabled>
              Select a user to login
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        )}
        <button
          type='submit'
          className='btn btn-primary my-2'
          disabled={!userId}
        >
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  users: PropTypes.array,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, getUsers })(Login);
