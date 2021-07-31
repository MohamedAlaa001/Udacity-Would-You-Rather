import React from 'react';

const Spinner = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className='spinner-border'
        style={{
          width: '3rem',
          height: '3rem',
          margin: 'auto',
          display: 'block',
          color: 'var(--color-primary)',
        }}
        role='status'
      ></div>
    </div>
  );
};

export default Spinner;
