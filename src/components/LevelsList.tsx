import React, { FC, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { find, kebabCase } from 'lodash';

import { IGroupedField, ILevelData, ROUTES } from '../common';
import { PercentageRow } from './PercentageRow';
import { PostDifficulty } from './PostDifficulty';
import styled from 'styled-components';

const SRow = styled.div`
  border-top: 1px solid ${({ theme }) => theme.accentRGBA};
  margin-bottom: 2rem;
  padding: 2rem 0 0;
  width: 100%;
`;

interface LevelsListProps {
  levels: IGroupedField[];
  total: number;
}

export const LevelsList: FC<LevelsListProps> = ({ levels, total }) => {
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
    <>
      {levels.map(({ fieldValue, totalCount }) => {
        const level = find(data, ['id', fieldValue]);
        return (
          <SRow key={fieldValue}>
            {level && (
              <PercentageRow
                to={`${ROUTES.LEVELS}/${kebabCase(level.title)}`}
                count={totalCount}
                total={total}
              >
                <PostDifficulty level={fieldValue} showLabel/>
              </PercentageRow>
            )}
          </SRow>
        );
      })}
    </>
  );
};
