import { map } from 'lodash';

import { LABELS } from './constants';
import { IGroupedField } from './types';

export const getPostsCount = (count: number): string => `${count} ${count === 1 ? LABELS.POST : LABELS.POSTS}`;

interface Group {
  letter: string;
  items: IGroupedField[];
}
type GroupsObject = {
  [key: string]: IGroupedField[];
};
export const groupByLetter = (items: IGroupedField[]): Group[] => {
  const groups = items.reduce((r: GroupsObject, c: IGroupedField) => {
    const letter = c.fieldValue[0].toUpperCase();
    r[letter] = r[letter] ? [...r[letter], c] : [c];
    return r;
  }, {});

  return map(groups, (items, letter) => ({ letter, items }));
};
