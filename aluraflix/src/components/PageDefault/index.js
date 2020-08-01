import React from 'react';
import styled, {css} from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;
  ${({paddingAll}) => css`
    padding: ${paddingAll};
  `}
`;

function pageDefault({children, paddingAll}){
  return(
    <React.Fragment>
      <Menu />
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer/>
    </React.Fragment>
  );
}

export default pageDefault;