import styled from 'styled-components';

export const SBigChar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 5rem;
  min-width: 10rem;
  color: ${(props) => props.theme.primary};
  border-right: 0.3rem dashed ${(props) => props.theme.accent};
  float: left;
`;
