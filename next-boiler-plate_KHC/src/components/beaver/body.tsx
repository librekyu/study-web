import React from 'react';
import styled from '@src/commons/style/themes/styled';
import SimpleSlider from '@src/components/beaver/bodyComp/carousel';
import LeftCont from '@src/components/beaver/bodyComp/bodyLeftSide';
import RightCont from '@src/components/beaver/bodyComp/bodyRightSide';

const Body = (): JSX.Element => {
  return (
    <>
      <CarDiv />
      <SimpleSlider />
      <BodyFirstSec />
      <BodySecondSec>
        <LeftCont />
        <RightCont />
      </BodySecondSec>
    </>
  );
};

const BodyFirstSec = styled.div`
  height: 630px;
  width: 100%;
`;
const BodySecondSec = styled.div`
  height: 630px;
  width: 100%;
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7d8;
`;
const CarDiv = styled.div`
  width: 100%;
  height: 96px;
`;

export default Body;
