import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@commons/style/themes/styled';
import { useDispatch, useSelector } from 'react-redux';

const KakaoMov = ({ results }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <br />
        <h1>카카오페이지 순위</h1>

        {results.map((r, index) => (
          <div key={index}>
            <img width="250" src={r.imageUrl} />
            <h3>
              {index + 1}위 : {r.movieId} - {r.movieTitle}
            </h3>
          </div>
        ))}
        <br />
        <ButtonStyle
          onClick={() => {
            router.push('/Mov');
          }}
        >
          예매순위
        </ButtonStyle>
        <ButtonStyle onClick={() => {}}>페이지 이동</ButtonStyle>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://movie.daum.net/api/main/kakaopage/rank`);
  const json = await res.json();
  const movies = json;
  return {
    props: {
      results: movies,
    },
  };
};

KakaoMov.defaultProps = {};

const ButtonStyle = styled.button`
  background-color: #00d094;
  padding: 10px 20px;
`;

export default KakaoMov;
