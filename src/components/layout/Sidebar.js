import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

const Sidebar = ({ user }) => {
  return !user ? (
    <Spinner />
  ) : (
    <nav className='sidebar'>
      <div className='sidebar-header'>
        <div className='avatar'>
          <img src={user.avatarURL} alt='' />
        </div>
        <div className='title'>
          <h5>{user.name}</h5>
        </div>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Sidebar);
