import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import test from './containers/Test/reducer';
const combinedReducer = combineReducers({
  auth: test,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }
    default: {
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof combinedReducer>;
