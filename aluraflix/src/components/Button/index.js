import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
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

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;