import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import { khcTestApi } from '@src/containers/Test/api';

const IndexPage = (): JSX.Element => {
  const router = useRouter();

  const [ids, setIds] = useState('');
  const [page, setPage] = useState(1);

  khcTestApi().then((res) => {
    const movie = res.data.boxOfficeResult.weeklyBoxOfficeList;
    const movieList = movie.map((item) => item.movieNm).toString();
    setIds(movieList);
  });
  return (
    <>
      <div>
        <h1>api 응답 값</h1> <br />
        {ids}
      </div>

      <ButtonStyle
        onClick={() => {
          setPage(page == 1 ? page + 1 : page - 1);
          router.push('/');
        }}
      >
        {page}
      </ButtonStyle>
    </>
  );
};

const ContainerStyle = styled.div`
  padding: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

const ButtonStyle = styled.button`
  background-color: #00d094;
  padding: 10px 20px;
`;

export default IndexPage;
