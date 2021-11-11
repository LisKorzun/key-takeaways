import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, LABELS } from '../common';
import { device } from '../styles';

interface ChipsByTopicsProps {
  active: string;
  baseRoute: string;
  topics: IGroupedField[];
}
const SChipsByTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;
export const ChipsByTopics: FC<ChipsByTopicsProps> = ({ topics, active, baseRoute }) => (
  <SChipsByTopics>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL_LEVELS}
    </SChipLink>
    {topics.map(({ fieldValue }) => (
      <SChipLink key={fieldValue} to={`${baseRoute}/${kebabCase(fieldValue)}`} selected={fieldValue === active}>
        {fieldValue}
      </SChipLink>
    ))}
  </SChipsByTopics>
);
