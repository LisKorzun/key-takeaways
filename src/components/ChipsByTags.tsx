import React, { FC } from 'react';
import { kebabCase } from 'lodash';

import { SChipLink, SChips } from './styled';
import { IGroupedField, LABELS } from '../common';

interface ChipsByTagsProps {
  active: string;
  baseRoute: string;
  tags: IGroupedField[];
  total: number;
}
export const ChipsByTags: FC<ChipsByTagsProps> = ({ tags, active, baseRoute }) => (
  <SChips>
    <SChipLink to={baseRoute} selected={active === 'all'}>
      {LABELS.ALL}
    </SChipLink>
    {tags.map(({ fieldValue }) => (
      <SChipLink key={fieldValue} to={`${baseRoute}/${kebabCase(fieldValue)}`} selected={fieldValue === active}>
        {fieldValue}
      </SChipLink>
    ))}
  </SChips>
);
