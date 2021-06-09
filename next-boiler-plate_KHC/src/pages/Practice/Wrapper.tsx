import React from 'react';

const Wrapper = ({ children }) => {
  const style = {
    border: '2px solid black',
    padding: '2px',
  };
  return <div style={style}>{children}</div>;
};

export default Wrapper;
