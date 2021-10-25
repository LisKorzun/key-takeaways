import styled from 'styled-components';

export const SRowContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const SPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding-right: 30px;
  width: 65%;
  border-right: ${(props) => `1px solid ${props.theme.border}`};
`;

export const STopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 30px;
`;

export const STopic = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
  padding: 20px 0;
  display: block;
  position: relative;
  & a {
    display: block;
    font-weight: bold;
    font-size: 13px;
    position: relative;
    padding-left: 14px;
    text-transform: uppercase;
    cursor: pointer;
    &::before {
      content: '.';
      display: inline-block;
      font-size: 25px;
      position: absolute;
      left: 0;
      top: -14px;
    }
    & span {
      float: right;
      padding: 0 8px;
    }
    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const STitleOfList = styled.div`
  display: block;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  font-weight: 300;
  color: ${(props) => props.theme.secondary};
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.border};
    margin-left: 20px;
  }
`;
