import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { testAction } from './actions';
import { LOAD_TEST } from './constants';
import * as testApi from './api';

import { SagaEffect } from '@src/utils/SagaUtils';
import { testActions } from '@src/containers/Test/actions';

function* test(action: testActions): SagaIterator {
  yield put(testAction.request());
  try {
    const { data }: SagaEffect<typeof testApi.testApi> = yield call(
      testApi.testApi,
      action.payload,
    );

    yield put(testAction.success(data));
  } catch (e) {
    yield put(testAction.failure(e));
  }
}

function* watchTest(): SagaIterator {
  yield takeLatest(LOAD_TEST, test);
}

export default function* testSaga(): SagaIterator {
  yield all([fork(watchTest)]);
}
