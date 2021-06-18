import React from 'react';
import styled from '@src/commons/style/themes/styled';

const LeftCont = () => {
  return (
    <>
      <Cont>
        <Title>비버블록 커리큘럼</Title>
        <Sub>
          누리 과정을 바탕으로 우리 아이에게
          <br />
          알맞는 콘텐츠를 찾아보세요.
        </Sub>
        <SeeDetails>
            자세히보기 >
        </SeeDetails>
      </Cont>
    </>
  );
};

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  width: 100%;
  padding-top : 30px;
`;

const Sub = styled.div`
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  padding-top : 30px;

`;

const SeeDetails = styled.div`
  font-weight: 700;
  font-size: 26px;
  text-decoration : underline;    
  text-decoration-thickness : 3px;  
  text-underline-position : under;
  padding-top : 30px;
  &:hover {
          cursor : pointer;
      }
    

`;

const Cont = styled.span`
  display: inline-block;
  width: 560px;
  height: 440px;
  background-color: #f8b8dd;
  padding : 50px 30px;
`;

export default LeftCont;
