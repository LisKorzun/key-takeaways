import styled from 'styled-components';

import { device } from '../../styles';

interface SCenterSectionProps {
  background?: boolean;
}

export const SCenterSection = styled.div<SCenterSectionProps>`
  width: 90vw;
  margin: 5rem auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    display: ${({ background }) => (background ? 'block' : 'none')};
    background-color: ${(props) => props.theme.accent};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
    overflow-x: hidden;
    border-radius: 1rem;
  }

  @media only screen and ${device.mobileUp} {
    width: 85vw;
  }

  @media only screen and ${device.tabletUp} {
    width: 80vw;
    align-items: flex-start;
  }

  @media only screen and ${device.laptopUp} {
    width: 70vw;
  }

  @media only screen and ${device.desktopUp} {
    width: 65vw;
  }

  @media only screen and ${device.desktopXLUP} {
    width: 58vw;
  }
`;
