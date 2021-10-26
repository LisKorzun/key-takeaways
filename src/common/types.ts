import { ImageDataLike } from 'gatsby-plugin-image';

export interface IPost {
  slug: string;
  id: string;
  frontmatter: { title: string; date: string; topic: string; tags: string[]; hero_image: ImageDataLike };
}
