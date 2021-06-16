import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import testReducer from './containers/Test/reducer';
import movReducer from './redux/movReducer';
const combinedReducer = combineReducers({
  testReducer,
  movReducer,
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
