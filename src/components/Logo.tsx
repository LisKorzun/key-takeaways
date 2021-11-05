import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Icon from '../assets/svg/react-logo.svg';

const LogoReact = styled(Icon)`
  fill: ${(props) => props.theme.background};
  width: 50px;
`;

const LogoName = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-transform: uppercase;
  -moz-transition: opacity 4s ease-in-out;
  -o-transition: oopacity 4s ease-in-out;
  -webkit-transition: opacity 4s ease-in-out;
  transition: opacity 4s ease-in-out;
`;

const LogoContainer = styled.div`
  margin: 20px auto;
  height: 60px;
  width: 60px;
  position: relative;
`;

const logos = ['js', 'ts', 'react'];
const delay = 8000;

export const Logo: FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <LogoContainer>
      {logos.map((logo, ind) => (
        <LogoName
          key={ind}
          style={{
            opacity: ind === index ? 1 : 0,
          }}
        >
          {logo === 'react' ? <LogoReact /> : logo}
        </LogoName>
      ))}
    </LogoContainer>
  );
};
