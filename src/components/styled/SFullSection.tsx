import styled from 'styled-components';

import { device } from '../../styles';

export const SFullSection = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
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
