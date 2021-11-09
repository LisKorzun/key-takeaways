import styled from 'styled-components';

import { device } from '../../styles';

export const SCenterSection = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media only screen and ${device.mobileUp} {
    width: 85vw;
  }

  @media only screen and ${device.tabletUp} {
    width: 80vw;
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
