import { ImageDataLike } from 'gatsby-plugin-image';

export type DefaultThemeKeys = 'primary' | 'secondary' | 'accent' | 'background' | 'text' | 'border';

export interface IPost {
  slug: string;
  id: string;
  timeToRead: number;
  frontmatter: { title: string; date: string; level: string; tags: string[]; hero_image: ImageDataLike };
}

export interface IGroupedField {
  fieldValue: string;
  totalCount: number;
}

export interface ILevelData {
  id: string;
  title: string;
  icon: string;
  caption: string;
}

export interface IHeading {
  url: string;
  title: string;
}
