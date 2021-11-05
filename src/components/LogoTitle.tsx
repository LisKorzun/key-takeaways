import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SLogoTitle = styled((props) => <Link {...props} />)`
  display: flex;
  position: relative;
  margin: 20px 25px;
  height: 300px;
  width: 50px;
  font-size: 30px;
  font-weight: 100;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  & span {
    width: 300px;
    position: absolute;
    left: -123px;
    top: 80px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`;

export const LogoTitle: FC = () => {
  return (
    <SLogoTitle to="/">
      <span>Key Takeaways</span>
    </SLogoTitle>
  );
};
