import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 0 auto;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 25px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  font-size: 1.4rem;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 1rem;
  }
`;

export const NavContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  margin-top: 1rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding: 10px 8px;
  }
`;
