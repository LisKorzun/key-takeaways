import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { device } from '../../styles/breakpoints';

const SLogo = styled.div`
  height: 6rem;
  width: 6rem;
  position: relative;
  margin: auto;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    text-transform: uppercase;
    -moz-transition: opacity 4s ease-in-out;
    -o-transition: oopacity 4s ease-in-out;
    -webkit-transition: opacity 4s ease-in-out;
    transition: opacity 4s ease-in-out;
  }

  @media only screen and ${device.laptopUp} {
    margin: 2rem auto;
  }
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
    <SLogo>
      {logos.map((logo, ind) => (
        <span
          key={ind}
          style={{
            opacity: ind === index ? 1 : 0,
          }}
        >
          {logo === 'react' ? <Icon name="react" width="50px" color="background" /> : logo}
        </span>
      ))}
    </SLogo>
  );
};
