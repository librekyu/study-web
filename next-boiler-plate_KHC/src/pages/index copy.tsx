import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { testApi, khcTestApi } from '@src/containers/Test/api';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';

function IndexPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const [ids, setIds] = useState('');
  const { testReduxObject } = useSelector(
    (state: RootState) => state.testReducer,
  );

  const renderTestReduxObject = useCallback(() => {
    return (
      <div>
        <p>
          <b>redux</b>
        </p>
        <p>{testReduxObject?.id || '데이터 조회 전'}</p>
      </div>
    );
  }, [testReduxObject]);

  return (
    <div>
      <h1>스터디</h1>
      시작점 여기서부터 알아서 해라
      <ContainerStyle>
        <ButtonStyle
          onClick={() => {
            khcTestApi().then((res) => {
              console.log(res.data.boxOfficeResult.weeklyBoxOfficeList);
              setIds(
                res.data.boxOfficeResult.weeklyBoxOfficeList
                  .map((movie) => movie.movieNm)
                  .toString(),
              );
            });
          }}
        >
          데이터 로드 (axios promise)
        </ButtonStyle>
      </ContainerStyle>
      <ContainerStyle>
        {renderTestReduxObject()}
        <div>
          <p>
            <b>axios promise</b>
          </p>
          <p>{ids || '데이터 조회 전'}</p>
        </div>
        <div></div>
      </ContainerStyle>
    </div>
  );
}

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
