import styled from 'styled-components';

export const SSeparator = styled.div`
  width: calc(10rem + 2vw);
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: ${(props) => `0.8rem solid ${props.theme.primary}`};
`;
