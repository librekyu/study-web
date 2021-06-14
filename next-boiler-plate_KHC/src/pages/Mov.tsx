import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@commons/style/themes/styled';

const Mov = ({ results }: { results: string[] }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <br />
        <h1>예매 순위</h1>
        <br />
        {results?.map((r, index) => (
          <div key={index}>{r}</div>
        ))}
        <br />
        <ButtonStyle
          onClick={() => {
            router.push('/Mov2');
          }}
        >
          페이지 이동
        </ButtonStyle>
      </div>
    </>
  );
};

const ButtonStyle = styled.button`
  background-color: #00d094;
  padding: 10px 20px;
`;

export default Mov;
