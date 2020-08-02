import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--black);
  border-radius: 5px;
  border: 1px solid var(--white);
  box-sizing: border-box;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;

  @media (max-width: 480px){
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center
  }

  &.cadastroCategoria, &.irHome{
    margin: 0 0 20px 15px;
    @media (max-width: 480px){
      margin: 20px auto;
    }
  }

  &:hover,
  &:focus {
    opacity: .5;
  }

`;

export default Button;