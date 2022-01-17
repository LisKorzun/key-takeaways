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

export const SPostLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 2rem;
  aside {
    max-width: min(300px, 100%);
    margin-left: 10rem;
    position: sticky;
    top: 3rem;
    align-self: flex-start;
    display: none;
    @media only screen and ${device.xlUp} {
      display: block;
    }
  }
  article {
    flex: 1 1 600px;
    max-width: min(600px, 100%);
    @media only screen and ${device.lUp} {
      flex: 1 1 900px;
      max-width: min(900px, 100%);
    }
  }
`;
