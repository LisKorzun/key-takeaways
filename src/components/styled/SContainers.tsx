import styled from 'styled-components';

import { device } from '../../styles';

export const SPageWrapper = styled.div`
  padding: 0 20px;
  align-self: center;
  width: 100%;
  max-width: 1300px;
  @media only screen and ${device.mUp} {
    padding: 0 80px;
  }
  @media only screen and ${device.lUp} {
    padding: 0 100px;
  }
`;

export const SPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas:
    'header header header'
    'main main main'
    'sidebar sidebar sidebar';
  gap: 3rem;
  header {
    grid-area: header;
    display: grid;
    justify-items: center;
  }
  main {
    grid-area: main;
  }
  aside {
    grid-area: sidebar;
  }
  @media only screen and ${device.lUp} {
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'header header header'
      'main main sidebar';
    header {
      grid-area: header;
      display: grid;
      justify-items: stretch;
    }
  }
`;
