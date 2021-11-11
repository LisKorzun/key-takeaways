import React, { FC, Fragment } from 'react';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, ILevelData, LABELS } from '../common';

interface ChipsByLevelsProps {
  active: string;
  baseRoute: string;
  data: ILevelData[];
  levels: IGroupedField[];
}
const SChipsByLevels = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
export const ChipsByLevels: FC<ChipsByLevelsProps> = ({ levels, active, data, baseRoute }) => (
  <SChipsByLevels>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL_LEVELS}
    </SChipLink>
    {levels.map(({ fieldValue }) => {
      const level = find(data, ['id', fieldValue]);
      return (
        <Fragment key={fieldValue}>
          {level && (
            <SChipLink to={`${baseRoute}/${kebabCase(level.title)}`} selected={fieldValue === active}>
              {level.title}
            </SChipLink>
          )}
        </Fragment>
      );
    })}
  </SChipsByLevels>
);
