import React from 'react';
import styled from '@src/commons/style/themes/styled';
import HeaderRightSide from './headerComp/headerRightSide';
import HeaderLeftSide from './headerComp/headerLeftSide';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderLeftSide />
      <HeaderRightSide />
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  background-color: white;
  position: fixed;
  z-index: 999;
  width: 100%;
  margin-bottom: 96px;
  padding-left: 120px;
  padding-right: 120px;
  /* border: 2px solid greenyellow; */
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  align-items: center;
`;
export default Header;
