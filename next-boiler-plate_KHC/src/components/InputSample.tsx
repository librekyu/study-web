import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const nameInput = useRef();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onChange2 = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setText('');
  };

  const onReset2 = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  const inputStyle = {
    border: '2px solid black',
  };
  return (
    <>
      <input onChange={onChange} value={text} style={inputStyle} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
      <input
        name="name"
        onChange={onChange2}
        style={inputStyle}
        placeholder="이름"
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        style={inputStyle}
        placeholder="닉네임"
        value={nickname}
        onChange={onChange2}
      />
      <button onClick={onReset2}>초기화</button>
      <div>
        <b>
          값 : {name}({nickname})
        </b>
      </div>
    </>
  );
};

export default InputSample;
