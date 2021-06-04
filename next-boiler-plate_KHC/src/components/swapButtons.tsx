import React from 'react';
import { useDispatch } from 'react-redux';
import { daily, weekly } from '@src/redux/movActions';

export const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <br></br>
      <button
        onClick={() => {
          dispatch(daily());
        }}
      >
        daily
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(weekly());
        }}
      >
        weekly
      </button>
    </>
  );
};
