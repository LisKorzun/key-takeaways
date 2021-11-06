import { LABELS } from './constants';

export const getPostsCount = (count: number): string => `${count} ${count === 1 ? LABELS.POST : LABELS.POSTS}`;
