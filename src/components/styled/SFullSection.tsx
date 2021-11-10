import styled from 'styled-components';

import { device } from '../../styles';

export const SFullSection = styled.div`
  position: relative;
  overflow: visible;
  
  &::before {
    background-color: ${(props) => props.theme.primary};
    content: "";
    position: absolute;
    top: 15%;
    left: -50%;
    width: 200%;
    height: 100%;
    z-index: -1;
    opacity: .1;
    transform: rotate(10deg) translateZ(0);
    overflow-x: hidden;
    
  }
  padding: 5rem 1rem;
  width: 100%;
  @media only screen and ${device.mobileUp} {
    padding: 5rem 3rem;
  }

  @media only screen and ${device.tabletUp} {
    
  }

  @media only screen and ${device.laptopUp} {
    padding: 5rem 5rem;
  }

  @media only screen and ${device.desktopUp} {
    
  }

  @media only screen and ${device.desktopXLUP} {
    
  }
`;
