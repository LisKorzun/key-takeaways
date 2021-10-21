import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Tag from '../assets/svg/tag.svg';
import About from '../assets/svg/about.svg';

const TagIcon = styled(Tag)`
  fill: ${(props) => props.theme.background};
  width: 35px;
`;

const AboutIcon = styled(About)`
  fill: ${(props) => props.theme.background};
  width: 35px;
`;

const Nav = styled.nav`
  margin: 20px auto;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; ;
`;
const NavItem = styled.li`
  margin-top: 20px;
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
    bottom: 14px;
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

const Menu: FC = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/tags">
          <TagIcon />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about">
          <AboutIcon />
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Menu;
