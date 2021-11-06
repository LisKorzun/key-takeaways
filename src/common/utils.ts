import { POST_LABEL, POSTS_LABEL } from './constants';

export const getPostsCount = (count: number): string => `${count} ${count > 1 ? POSTS_LABEL : POST_LABEL}`;
