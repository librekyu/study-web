import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@src/commons/style/themes/styled';
import Header from '@src/components/beaver/header';
import Footer from '@src/components/beaver/footer';
import Body from '@src/components/beaver/body';
import SimpleSlider from '@src/components/beaver/bodyComp/carousel';

const IndexPage = ({ results }): JSX.Element => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
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
