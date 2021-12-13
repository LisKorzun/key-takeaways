import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { SChipLink } from './styled';
import { IGroupedField, LABELS } from '../common';
import { device } from '../styles';

const SChipsByTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;

interface ChipsByTagsProps {
  active: string;
  baseRoute: string;
  tags: IGroupedField[];
  total: number;
}
export const ChipsByTags: FC<ChipsByTagsProps> = ({ tags, active, baseRoute, total }) => (
  <SChipsByTags>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL}
    </SChipLink>
    {tags.map(({ fieldValue, totalCount }) => (
      <SChipLink key={fieldValue} to={`${baseRoute}/${kebabCase(fieldValue)}`} selected={fieldValue === active}>
        {fieldValue}
      </SChipLink>
    ))}
  </SChipsByTags>
);
