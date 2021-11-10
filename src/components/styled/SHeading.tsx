import styled from 'styled-components';

import { device } from '../../styles';

export const SHeading = styled.div`
  font-size: calc(3rem + 1.5vw);
  //font-size: calc(2rem + 2vw);
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
  opacity: 0.6;
  margin-bottom: calc(4rem + 0.5vw);
  position: relative;
  @media only screen and ${device.mobileUp} {
    font-size: calc(2.5rem + 2vw);
  }
  @media only screen and ${device.tabletUp} {
    //font-size: calc(3rem + 2.5vw);
    font-size: calc(3rem + 1.5vw);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 30%;
    height: 1rem;
    opacity: 0.6;
    border-bottom: 0.2rem solid ${(props) => props.theme.accent};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 0;
    width: 20%;
    height: 1rem;
    opacity: 0.6;
    border-bottom: 0.2rem solid ${(props) => props.theme.accent};
  }
`;
