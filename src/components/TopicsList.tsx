import React, { FC } from 'react';
import { IGroupedField, LABELS } from '../common';

import { TopicCard } from './TopicCard';
import { SCenterSection, SHeading } from './styled';

interface TopicsListProps {
  topics: IGroupedField[];
}

export const TopicsList: FC<TopicsListProps> = ({ topics }) => (
  <SCenterSection background>
    <SHeading>{LABELS.EXPLORE_TOPICS}</SHeading>
    {topics.map(({ fieldValue, totalCount }) => (
      <TopicCard key={fieldValue} title={fieldValue} count={totalCount} />
    ))}
  </SCenterSection>
);
