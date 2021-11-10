import React, { FC } from 'react';
import { IGroupedField } from '../common';

import { TopicCard } from './TopicCard';

interface TopicsListProps {
  topics: IGroupedField[];
}

export const TopicsList: FC<TopicsListProps> = ({ topics }) => (
  <div>
    {topics.map(({ fieldValue, totalCount }) => (
      <TopicCard key={fieldValue} title={fieldValue} count={totalCount} />
    ))}
  </div>
);
