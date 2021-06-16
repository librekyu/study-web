import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@src/commons/style/themes/styled';
import Header from '@src/components/beaver/Header';

const IndexPage = ({ results }): JSX.Element => {
  return (
    <>
      <Header />
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
