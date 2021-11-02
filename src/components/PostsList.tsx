import React, {FC} from 'react';

import { SPostsContainer, SHeadLine } from './common';
import { Card } from './card';
import { IPost, RECENT_LABEL } from '../common';

interface IPostsList {
  title?: string;
  posts: IPost[];
}

export const PostsList: FC<IPostsList> = ({ title = RECENT_LABEL, posts = [] }) => {
  return (
    <SPostsContainer>
      <>
        <SHeadLine>{title}</SHeadLine>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </>
    </SPostsContainer>
  );
};
