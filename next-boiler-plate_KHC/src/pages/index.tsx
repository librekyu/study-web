import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import { khcTestApi } from '@src/containers/Test/api';
import { GetFirstMovieList } from '@src/components/movieList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducers } from '@src/redux/movReducer';
import { Buttons } from '@src/components/swapButtons';
import store from '@src/redux/movStore';

const IndexPage = (): JSX.Element => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  return (
    <>
      <Provider store={store}>
        <div>
          <h1>api 응답 값</h1> <br />
          <GetFirstMovieList></GetFirstMovieList>
        </div>

        <ButtonStyle
          onClick={() => {
            setPage(page == 1 ? page + 1 : page - 1);
            router.push('/');
          }}
        >
          {page}
        </ButtonStyle>
        <Buttons></Buttons>
      </Provider>
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
