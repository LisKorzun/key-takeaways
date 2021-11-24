import styled from 'styled-components';

export const SHeading = styled.h2`
  font-weight: 700;
  font-size: calc(4rem + 2vw);
  line-height: 1;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  margin-bottom: calc(2rem + 1.5vw);
`;
