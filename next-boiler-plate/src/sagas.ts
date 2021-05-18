import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import test from './containers/Test/saga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(test)]);
}
