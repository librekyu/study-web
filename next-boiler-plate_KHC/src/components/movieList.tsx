import React, { useState } from 'react';
import { khcTestApi } from '@src/containers/Test/api';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import send from '@src/utils/SlackUtils';

export const GetFirstMovieList = (): JSX.Element => {
  const { value } = useSelector((state) => state.value);
  const [movIds, setMovIds] = useState('');
  let show = '기본값';
  khcTestApi().then((res) => {
    let movie;

    if (value === 0) {
      movie = res.data.boxOfficeResult.weeklyBoxOfficeList;
      show = '주간 박스오피스';
      console.log('WEEKLY ON');
    } else if (value === 1) {
      movie = res.data.boxOfficeResult.dailyBoxOfficeList;
      show = '일간 박스오피스';
      console.log('DAILY ON');
    }
    send(show + '에 입장!');

    const movieList = movie.map((item) => item.movieNm).toString();
    setMovIds(movieList + '>>>>>>>>>>>>>>>>>>>>>>>' + show);
  });
  return (
    <>
      {movIds} : {show}
    </>
  );
};
