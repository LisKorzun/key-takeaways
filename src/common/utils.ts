import { map } from 'lodash';

import { LABELS } from './constants';
import { IGroupedField } from './types';

export const getPostsCount = (count: number): string => `${count} ${count === 1 ? LABELS.POST : LABELS.POSTS}`;

interface Group {
  letter: string;
  tags: IGroupedField[];
}
type GroupsObject = {
  [key: string]: IGroupedField[];
};
export const groupByLetter = (items: IGroupedField[]): Group[] => {
  const groups = items.reduce((r: GroupsObject, c: IGroupedField) => {
    r[c.fieldValue[0]] = r[c.fieldValue[0]] ? [...r[c.fieldValue[0]], c] : [c];
    return r;
  }, {});

  return map(groups, (tags, letter) => ({ letter, tags }));
};
