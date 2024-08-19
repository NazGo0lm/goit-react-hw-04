//import React from 'react'

//import style from './Button.module.css';

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn
