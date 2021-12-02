import React, { FC, Fragment } from 'react';
import { find, kebabCase } from 'lodash';

import { SChipLink, SChips } from './styled';
import { IGroupedField, ILevelData, LABELS } from '../common';

interface ChipsByLevelsProps {
  active: string;
  baseRoute: string;
  data: ILevelData[];
  levels: IGroupedField[];
  total: number;
}
export const ChipsByLevels: FC<ChipsByLevelsProps> = ({ levels, active, data, baseRoute, total }) => (
  <SChips>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL_LEVELS}
      {/*<span>{total}</span>*/}
    </SChipLink>
    {levels.map(({ fieldValue, totalCount }) => {
      const level = find(data, ['id', fieldValue]);
      return (
        <Fragment key={fieldValue}>
          {level && (
            <SChipLink to={`${baseRoute}/${kebabCase(level.title)}`} selected={fieldValue === active}>
              {level.title}
              {/*<span>{totalCount}</span>*/}
            </SChipLink>
          )}
        </Fragment>
      );
    })}
  </SChips>
);
