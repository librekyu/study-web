import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import { khcTestApi } from '@src/containers/Test/api';
import Mov from './Mov';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <div>
        <h1>api 응답 값</h1> <br />
        <Mov results={['qwe', 'zxc']} />
      </div>
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
