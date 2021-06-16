import { combineReducers } from 'redux';

const MOV_STATE = {
  value: 0,
};

const movReducer = (state = MOV_STATE, action) => {
  switch (action.type) {
    case 'MOV_DAILY': {
      return {
        ...state,
        value: 1,
      };
    }
    case 'MOV_WEEKLY': {
      return {
        ...state,
        value: 0,
      };
    }
    default:
      return state;
  }
};

export default movReducer;
