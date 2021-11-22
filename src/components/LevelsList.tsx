import React, { FC, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { find, kebabCase } from 'lodash';

import { IGroupedField, ILevelData, ROUTES } from '../common';
import { PercentageRow } from './PercentageRow';

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
          <Fragment key={fieldValue}>
            {level && (
              <PercentageRow
                label={level.title}
                to={`${ROUTES.LEVELS}/${kebabCase(level.title)}`}
                count={totalCount}
                total={total}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};
