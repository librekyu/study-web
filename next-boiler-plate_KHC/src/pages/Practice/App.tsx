import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
} from 'react';
import useInputs from './Hooks/useInputs';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { setUseProxies } from 'immer';
import { userInfo } from 'os';

const initialStates = {
  users: [
    {
      id: 1,
      username: 'name1',
      email: 'affdd@asd.com',
      active: true,
    },
    {
      id: 2,
      username: 'name2',
      email: 'emafefdil@asd.com',
      active: false,
    },
    {
      id: 3,
      username: 'name3',
      email: 'emaaaail@asd.com',
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const App = () => {
  const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는 중');
    return users.filter((user) => user.active).length;
  };

  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const [state, dispatch] = useReducer(reducer, initialStates);
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <Wrapper>
        <Hello name="react" pro="aa" special="good" />
        <Hello />
        <Hello />
        <br />
        <div></div>
        <div className="gray-box">gd</div>
      </Wrapper>
      <Counter />
      <InputSample />

      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
};
export default App;
