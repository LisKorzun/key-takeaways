import React, { FC, Fragment } from 'react';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, ILevelData, LABELS } from '../common';
import { device } from '../styles';

interface ChipsByLevelsProps {
  active: string;
  baseRoute: string;
  data: ILevelData[];
  levels: IGroupedField[];
}
const SChipsByLevels = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
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
