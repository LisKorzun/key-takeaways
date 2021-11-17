import styled from 'styled-components';

export const SHeading = styled.h2`
  font-family: 'Architects Daughter';
  font-weight: 500;
  font-size: calc(2rem + 1.5vw);
  line-height: 1;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
  margin-bottom: calc(4rem + 0.5vw);
`;
