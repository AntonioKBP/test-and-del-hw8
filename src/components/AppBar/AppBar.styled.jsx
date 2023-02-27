import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: aliceblue;
  width: auto;
  height: 35px;
  border-radius: 4px;
`;

export const NaviLink = styled(NavLink)`
  margin-right: 10px;
`;
