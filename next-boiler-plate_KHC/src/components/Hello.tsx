import React from 'react';

const Hello = ({ name, pro, special }) => {
  return (
    <div>
      안녕하세요{name} - {pro} - {special} -
    </div>
  );
};

Hello.defaultProps = {
  name: 'name',
  pro: 'pro',
  special: 'special',
};

export default Hello;
