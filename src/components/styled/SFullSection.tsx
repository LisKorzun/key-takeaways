import styled from 'styled-components';

import { device } from '../../styles';

export const SFullSection = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
  &::before {
    background-color: ${(props) => props.theme.primary};
    content: "";
    position: absolute;
    top: -1%;
    left: -50%;
    width: 200%;
    height: 120%;
    z-index: -1;
    opacity: .1;
    transform: rotate(6deg) translateZ(0);
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
    flex-direction: row;
  }

  @media only screen and ${device.desktopUp} {
    
  }

  @media only screen and ${device.desktopXLUP} {
    
  }
`;
