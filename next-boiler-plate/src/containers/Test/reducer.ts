import produce from 'immer';
import { testActions } from './actions';
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from './constants';

export type TestState = {
  testObject: {
    id: number;
    name: string;
  };
};

export const initialState: TestState = {
  testObject: {
    id: -1,
    name: '',
  },
};

function testReducer(
  state: TestState = initialState,
  action: testActions,
): TestState {
  return produce(state, (draft) => {
    switch (action.type) {
      case TEST_REQUEST: {
        break;
      }
      case TEST_SUCCESS: {
        break;
      }
      case TEST_FAILURE: {
        break;
      }
    }
  });
}

export default testReducer;
