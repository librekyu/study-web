import React from 'react';
import styled from '@src/commons/style/themes/styled';
import HeaderRightSide from './headerComp/HeaderRightSide';
import HeaderLeftSide from './headerComp/HeaderLeftSide';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderLeftSide />
      <HeaderRightSide />
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  border: 2px solid greenyellow;
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  align-items: center;
`;
export default Header;
