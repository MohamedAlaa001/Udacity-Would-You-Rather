import React from 'react';

const Progressbar = ({ styleValue }) => {
  const progressStyle = {
    background: 'var(--bs-secondary)',
    height: '1.5rem',
  };

  const barStyle = {
    width: `${styleValue}%`,
    background: 'var(--color-primary)',
  };

  return (
    <div className='progress' style={progressStyle}>
      <div
        className='progress-bar'
        role='progressbar'
        style={barStyle}
        aria-valuenow={styleValue}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        {styleValue}%
      </div>
    </div>
  );
};

export default Progressbar;
