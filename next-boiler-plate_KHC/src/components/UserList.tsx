import React, { useEffect } from 'react';
const User = React.memo(({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log('user값이 설정됨');
    console.log(user);
    return () => {
      console.log('user값이 설정되기 전');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
