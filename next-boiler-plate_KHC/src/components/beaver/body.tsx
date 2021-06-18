import React from 'react';
import styled from '@src/commons/style/themes/styled';
import SimpleSlider from '@src/components/beaver/bodyComp/carousel';

const Body = (): JSX.Element => {
  return (
    <>
      <CarDiv />
      <SimpleSlider />
      <BodyMainCont></BodyMainCont>
    </>
  );
};

const BodyMainCont = styled.div`
  height: 950px;
`;
const CarDiv = styled.div`
  width: 100%;
  height: 96px;
`;

export default Body;
