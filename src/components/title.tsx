import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { isEmpty } from 'lodash';

const STitleLink = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  color: ${(props) => props.theme.secondary};
  font-size: 40px;
  text-transform: capitalize;
  cursor: pointer;
  & span {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 4px;
    margin-left: 15px;
    border: ${(props) => `1px solid ${props.theme.secondary}`};
    border-radius: 3px;
  }
  &:hover,
  &:hover span {
    color: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
  }
`;

const STitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  color: ${(props) => props.theme.secondary};
  font-size: 40px;
  text-transform: capitalize;
  & span {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 4px;
    margin-left: 15px;
    border: ${(props) => `1px solid ${props.theme.secondary}`};
    border-radius: 3px;
  }
`;

const STitleCaption = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 10px;
  margin-top: 70px;
`;

const SSeparator = styled.div`
  border-bottom: ${(props) => `3px solid ${props.theme.primary}`};
  width: 150px;
  margin: 10px 0;
`;

interface HeadingProps {
  label: string;
  title: string;
  count: number;
}

const Heading: FC<HeadingProps> = ({ title, count, label }) => (
  <>
    {title}
    <span>{`${count} ${label}`}</span>
  </>
);

interface TitleProps {
  caption: string;
  title: string;
  link?: string;
  count: number;
}

export const Title: FC<TitleProps> = ({ caption, title, link, count }) => {
  const label = count === 1 ? 'article' : 'articles';
  return (
    <>
      <STitleCaption>{caption}</STitleCaption>
      {isEmpty(link) ? (
        <STitle>
          <Heading title={title} count={count} label={label} />
        </STitle>
      ) : (
        <STitleLink to={link}>
          <Heading title={title} count={count} label={label} />
        </STitleLink>
      )}
      <SSeparator />
    </>
  );
};
