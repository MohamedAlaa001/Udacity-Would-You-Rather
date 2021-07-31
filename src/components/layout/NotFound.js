import { Link } from 'react-router-dom';

const NotFound = () => {
  const pageStyle = {
    background: 'var(--color-gray-block)',
    width: '100%',
    height: '100vh',
    zIndex: '1000',
    position: 'fixed',
    top: 0,
    left: 0,
  };
  return (
    <div style={pageStyle}>
      <div className='container mt-5'>
        <h1 style={{ color: 'var(--color-danger)' }}>404</h1>
        <h5 className=''>Opps... We couldn't find the page your requested</h5>
        <h5>
          Go back or navigate to
          <Link to='/' className='ms-1' style={{ textDecoration: 'underline' }}>
            Main page
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
