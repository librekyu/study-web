import { MOV_STATE } from '@src/redux/movState';
import { combineReducers } from 'redux';

export const movReducer = (state = MOV_STATE, action) => {
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

export const rootReducers = combineReducers({
  value: movReducer,
});
