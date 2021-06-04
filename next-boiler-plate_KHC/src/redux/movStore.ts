import { createStore } from 'redux';
import { rootReducers } from '@src/redux/movReducer';

const store = createStore(rootReducers);

export default store;
