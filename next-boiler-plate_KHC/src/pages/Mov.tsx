import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@commons/style/themes/styled';

const Mov = ({ results }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <br />
        <h1>예매 순위</h1>
        <br />
        {results.map((r, index) => (
          <div key={index}>
            <h3>
              {index + 1}위 - {r.movieId} - {r.titleKorean}
            </h3>
          </div>
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

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://movie.daum.net/api/common/reservation/rank`);
  const json = await res.json();
  const movies = json;
  return {
    props: {
      results: movies,
    },
  };
};

Mov.defaultProps = {};

const ButtonStyle = styled.button`
  background-color: #00d094;
  padding: 10px 20px;
`;

export default Mov;
