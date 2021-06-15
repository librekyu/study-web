import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@commons/style/themes/styled';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '@src/components/MovieItem';
import Color from '@src/commons/style/themes/colors';

const KakaoMov = ({ results }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <br />
        <h1>카카오페이지 순위</h1>
        <MovieListAdvancedContainer>
          {results.map((movieItem, index) => (
            <MovieItem
              key={index}
              imageUrl={movieItem.imageUrl}
              order={index}
              movieId={movieItem.movieId}
              title={movieItem.movieTitle}
            />
          ))}
        </MovieListAdvancedContainer>

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
  const res = await fetch(`https://movie.daum.net/api/main/kakaopage/rank/`);
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

const MovieListContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 20px;
`;

const MovieListAdvancedContainer = styled(MovieListContainer)`
  background-color: ${Color.Primary500};
`;

export default KakaoMov;
