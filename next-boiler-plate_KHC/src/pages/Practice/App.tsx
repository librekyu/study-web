import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

const App = () => {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px',
  };
  const users = [
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
  ];

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
      <UserList users={users} />
    </div>
  );
};
export default App;
