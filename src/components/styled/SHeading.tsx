import styled from 'styled-components';

export const SHeading = styled.h2`
  line-height: 1;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
  opacity: 0.6;
  margin-bottom: calc(4rem + 0.5vw);
  position: relative;

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
