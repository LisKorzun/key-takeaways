import { ImageDataLike } from 'gatsby-plugin-image';

export type DefaultThemeKeys = 'primary' | 'secondary' | 'accent' | 'background' | 'text' | 'border';

export interface IPost {
  slug: string;
  id: string;
  frontmatter: { title: string; date: string; level: string; topic: string; tags: string[]; hero_image: ImageDataLike };
}

export interface IGroupedField {
  fieldValue: string;
  totalCount: number;
}
