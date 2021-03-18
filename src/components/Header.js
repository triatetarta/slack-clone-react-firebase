import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>test</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  color: violet;

  h1 {
    font-size: 5rem;
  }
`;

export default Header;
