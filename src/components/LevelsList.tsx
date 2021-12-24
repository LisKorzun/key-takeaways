import React, { FC, Fragment } from 'react';
import orderBy from 'lodash/orderBy';
import find from 'lodash/find';
import styled from 'styled-components';

import { LevelCard } from './LevelCard';
import { IGroupedField, ILevelData } from '../common';
import { device } from '../styles';

const SLevelsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media only screen and ${device.sUp} {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and ${device.lUp} {
    grid-template-columns: 1fr;
  }
`;

interface LevelsListProps {
  levels: IGroupedField[];
  levelsData: ILevelData[];
}
export const LevelsList: FC<LevelsListProps> = ({ levels, levelsData }) => (
  <SLevelsList>
    {orderBy(levels, ['fieldValue'], ['asc']).map(({ fieldValue }) => {
      const level = find(levelsData, ['id', fieldValue]);
      return (
        <Fragment key={fieldValue}>
          {level && (
            <>
              <LevelCard level={level} />
            </>
          )}
        </Fragment>
      );
    })}
  </SLevelsList>
);
