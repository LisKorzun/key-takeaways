import React, { FC, Fragment } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';

import { Icon } from './Icon';
import { getPostsCount, IGroupedField, ILevelData, LABELS } from '../common';
import { device } from '../styles';

const SLevelCard = styled((props) => <Link {...props} />)`
  padding-top: 50px;
  padding-left: 20px;
  min-width: 90%;
  @media only screen and ${device.mobileUp} {
    min-width: 80%;
  }
  @media only screen and ${device.tabletUp} {
    min-width: 40%;
  }
  @media only screen and ${device.laptopUp} {
    min-width: 40%;
  }
  @media only screen and ${device.desktopUp} {
    min-width: 30%;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;
  border: ${(props) => `1px solid ${props.theme.text}`};
  color: ${(props) => `${props.theme.text}`};

  & h4 {
    margin: 5px 0;
    font-size: 30px;
    font-weight: 200;
  }

  & span {
    align-self: flex-end;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 6px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: ${(props) => `1px solid${props.theme.text}`};
    color: ${(props) => `${props.theme.background}`};
    background-color: ${(props) => `${props.theme.text}`};
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.primary}`};
  }
`;

interface LevelCardProps {
  title: string;
  count: number;
  icon: string;
}

export const Level: FC<LevelCardProps> = ({ title, count, icon }) => (
  <SLevelCard to={`/levels/${kebabCase(title)}`}>
    <Icon name={icon} width="90px" color="primary" />
    <h4>{title}</h4>
    <span>{getPostsCount(count)}</span>
  </SLevelCard>
);

const SLevelsList = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  h3 {
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme.primary};
    margin-bottom: 5rem;
  }
  .levels {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    @media only screen and ${device.tabletUp} {
    }
    @media only screen and ${device.laptopUp} {
      gap: 5rem;
    }
    @media only screen and ${device.desktopUp} {
    }
  }
`;
interface LevelsListProps {
  levels: IGroupedField[];
}

export const LevelsList: FC<LevelsListProps> = ({ levels }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            levels {
              id
              title
              icon
            }
          }
        }
      }
    `
  );

  const data: ILevelData[] = site.siteMetadata.levels;

  return (
    <SLevelsList>
      <h3>{LABELS.LEVELS}</h3>
      <div className="levels">
        {levels.map(({ fieldValue, totalCount }) => {
          const level = find(data, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {level && <Level title={level.title} count={totalCount} icon={level.icon} />}
            </Fragment>
          );
        })}
      </div>
    </SLevelsList>
  );
};
