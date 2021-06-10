import React, { useRef, useState, useMemo, useCallback } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { setUseProxies } from 'immer';
import { userInfo } from 'os';

const App = () => {
  const nextId = useRef(4);

  const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는 중');
    return users.filter((user) => user.active).length;
  };

  const [inputs, setInputs] = useState({
    //인풋값을 받기 위한 state 정의
    username: '',
    email: '',
  });

  const { username, email } = inputs; // input 값에 username, email을 넣어줌

  const onChange = useCallback((e) => {
    //input 값이 변할때 state값 갱신
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px',
  };
  const [users, setUsers] = useState([
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
  ]);
  const onCreate = useCallback(() => {
    //onChange에서 갱신받은 state를 여기서 사용
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));
    //onCreate 함수로 input 값 초기화, nextId ref값 1 증가
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, users, email]);

  const onRemove = useCallback(
    (id) => {
      //user.id 가 파라미터와 일치하지 않는 원소만 추출해서 배열을 만듬
      // = user.id 가 id 인것만 제거함
      setUsers((users) => users.filter((user) => user.id !== id));
    },
    [users],
  );

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <Wrapper>
        <Hello name="react" pro="aa" special="good" />
        <Hello />
        <Hello />
        <br />
        <div style={style}></div>
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
};
export default App;
