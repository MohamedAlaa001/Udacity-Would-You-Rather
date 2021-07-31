import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth';

const Navbar = ({ logout }) => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <div className='navbar-header'>
          <Link to='/dashboard' className='navbar-brand'>
            <strong>Would You Rather...?</strong>
          </Link>
        </div>
        <div className='navbar-right-menu list-inline'>
          <div className='list-inline-item'>
            <Link
              to='/dashboard/add'
              className='nav-link'
              activeClassName='active'
            >
              Create Question
            </Link>
          </div>
          <div className='list-inline-item'>
            <Link to='/dashboard' className='nav-link'>
              Home
            </Link>
          </div>
          <div className='list-inline-item'>
            <Link to='/dashboard/leaderboard' className='nav-link'>
              Leaderboard
            </Link>
          </div>
          <div className='list-inline-item'>
            <a href='#!' className='nav-link' onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect(null, { logout })(Navbar);
