import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { setUseProxies } from 'immer';

const App = () => {
  const nextId = useRef(4);

  const [inputs, setInputs] = useState({
    //인풋값을 받기 위한 state 정의
    username: '',
    email: '',
  });

  const { username, email } = inputs; // input 값에 username, email을 넣어줌

  const onChange = (e) => {
    //input 값이 변할때 state값 갱신
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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
    },
    {
      id: 2,
      username: 'name2',
      email: 'emafefdil@asd.com',
    },
    {
      id: 3,
      username: 'name3',
      email: 'emaaaail@asd.com',
    },
  ]);
  const onCreate = () => {
    //onChange에서 갱신받은 state를 여기서 사용
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    //onCreate 함수로 input 값 초기화, nextId ref값 1 증가
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

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
      <UserList users={users} />
    </div>
  );
};
export default App;
