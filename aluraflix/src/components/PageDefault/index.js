import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;
  &.page404{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function pageDefault({children}){
  return(
    <React.Fragment>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer/>
    </React.Fragment>
  );
}

export default pageDefault;