import styled from 'styled-components';

import { device } from '../../styles';

export const SPageWrapper = styled.div`
  padding: 0 20px;
  align-self: center;
  width: 100%;
  //width: -webkit-fill-available;
  //width: -moz-available;
  max-width: 1300px;
  @media only screen and ${device.tabletUp} {
    padding: 0 80px;
  }
  @media only screen and ${device.laptopUp} {
    padding: 0 100px;
  }
`;
