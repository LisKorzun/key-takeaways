import styled from 'styled-components';

export const SLetterNav = styled.div`
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 2rem;
  box-shadow: rgba(117, 123, 148, 0.17) 0px -23px 25px 0px inset, rgba(117, 123, 148, 0.15) 0px -36px 30px 0px inset,
    rgba(117, 123, 148, 0.1) 0px -79px 40px 0px inset, rgba(117, 123, 148, 0.06) 0px 2px 1px,
    rgba(117, 123, 148, 0.09) 0px 4px 2px, rgba(117, 123, 148, 0.09) 0px 8px 4px, rgba(117, 123, 148, 0.09) 0px 16px 8px,
    rgba(117, 123, 148, 0.09) 0px 32px 16px;
  a {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    font-size: 2rem;
    white-space: nowrap;
    padding: 0 1.3rem;
    line-height: 26px;
  }
`;
