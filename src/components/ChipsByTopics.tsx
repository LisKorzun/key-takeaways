import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, LABELS } from '../common';

interface ChipsByTopicsProps {
  active: string;
  baseRoute: string;
  topics: IGroupedField[];
}
const SChipsByTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
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
