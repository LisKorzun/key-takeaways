import styled from 'styled-components';

export const SPostCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
  align-items: stretch;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const SPostCardContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 20px;
  grid-template-rows: auto 1fr auto;
  padding: 2rem;
  column-gap: 20px;
  row-gap: 10px;
  background-color: ${({ theme }) => theme.accentRGBA};

  & > a:nth-child(1) {
    grid-column-end: span 2;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  & > a:nth-child(2) {
    grid-row-end: span 3;
  }
  & > h2 {
    grid-column-end: span 2;
    margin: 0;
    align-self: start;
    a {
      font-size: calc(16px + 0.5vw);
      font-weight: 600;
      text-transform: capitalize;
      display: block;
      line-height: 1.3;
      color: ${(props) => props.theme.secondary};
      &:hover {
        color: ${(props) => props.theme.accent};
      }
  }
`;
