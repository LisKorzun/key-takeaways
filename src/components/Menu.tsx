import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Icon } from './Icon';

const Nav = styled.nav`
  margin: 20px auto;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const NavItem = styled.li`
  margin-top: 25px;
  padding: 0;
  list-style: none;
  font-size: 18px;
`;

const NavLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  font-weight: 200;
  position: relative;
  padding: 10px 0;
  color: ${(props) => props.theme.background};
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    bottom: 5px;
    left: -2px;
    right: 0;
    background-color: ${(props) => props.theme.primary};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.primary};
    &:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

export const Menu: FC = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/levels">
          <Icon name="levels" height="30px" color="background" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/topics">
          <Icon name="topics" height="30px" color="background" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/tags">
          <Icon name="tag" height="30px" color="background" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about">
          <Icon name="about" height="30px" color="background" />
        </NavLink>
      </NavItem>
    </Nav>
  );
};
