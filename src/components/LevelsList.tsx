import React, { FC, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { find } from 'lodash';
import styled from 'styled-components';

import { IGroupedField, ILevelData, LABELS } from '../common';
import { device } from '../styles';
import { LevelCard } from './LevelCard';
import { SHeading } from './styled';

const SLevelsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90vw;
  margin: 3rem auto 5rem;
  @media only screen and ${device.mobileUp} {
    max-width: 85vw;
  }

  @media only screen and ${device.tabletUp} {
    max-width: 80vw;
  }
  @media only screen and ${device.laptopUp} {
    width: 60%;
    max-width: 50vw;
  }
  .levels {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    @media only screen and ${device.tabletUp} {
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
      <SHeading>{LABELS.LEVELS}</SHeading>
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
