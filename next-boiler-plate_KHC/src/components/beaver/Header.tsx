import React from 'react';
import styled from '@src/commons/style/themes/styled';
import HeaderRightSide from './headerComp/headerRightSide';
import HeaderLeftSide from './headerComp/headerLeftSide';

const Header = (): JSX.Element => {
  return (
    <Hbody>
      <HeaderContainer>
        <HeaderLeftSide />
        <HeaderRightSide />
      </HeaderContainer>
    </Hbody>
  );
};

const Hbody = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;
const HeaderContainer = styled.div`
  background-color: white;
  width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
  /* border: 2px solid greenyellow; */
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  align-items: center;
`;

export default Header;
