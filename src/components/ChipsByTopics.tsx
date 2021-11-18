import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, LABELS } from '../common';
import { device } from '../styles';

const SChipsByTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;

interface ChipsByTopicsProps {
  active: string;
  baseRoute: string;
  topics: IGroupedField[];
  total: number;
}
export const ChipsByTopics: FC<ChipsByTopicsProps> = ({ topics, active, baseRoute, total }) => (
  <SChipsByTopics>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL_TOPICS}
      <span>{total}</span>
    </SChipLink>
    {topics.map(({ fieldValue, totalCount }) => (
      <SChipLink key={fieldValue} to={`${baseRoute}/${kebabCase(fieldValue)}`} selected={fieldValue === active}>
        {fieldValue}
        <span>{totalCount}</span>
      </SChipLink>
    ))}
  </SChipsByTopics>
);
