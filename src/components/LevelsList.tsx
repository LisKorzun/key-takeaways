import React, { FC, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { find } from 'lodash';
import styled from 'styled-components';

import { IGroupedField, ILevelData, LABELS } from '../common';
import { device } from '../styles';
import { LevelCard } from './LevelCard';

const SLevelsList = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  h2 {
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme.text};
    margin-bottom: 5rem;
    font-weight: 300;
  }
  .levels {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    @media only screen and ${device.laptopUp} {
      gap: 5rem;
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
      <h2>{LABELS.LEVELS}</h2>
      <div className="levels">
        {levels.map(({ fieldValue, totalCount }) => {
          const level = find(data, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {level && <LevelCard title={level.title} count={totalCount} icon={level.icon} />}
            </Fragment>
          );
        })}
      </div>
    </SLevelsList>
  );
};
