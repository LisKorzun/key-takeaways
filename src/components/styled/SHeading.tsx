import styled from 'styled-components';

export const SHeading = styled.h2`
  font-family: 'Architects Daughter';
  font-weight: 500;
  font-size: calc(2rem + 1.5vw);
  line-height: 1;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
  margin-bottom: calc(4rem + 0.5vw);
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
`;
