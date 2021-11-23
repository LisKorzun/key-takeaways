import React, { FC } from 'react';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Icon } from './Icon';
import { ILevelData } from '../common';

const SPostDifficulty = styled((props) => <Link {...props} />)`
  display: block;
  padding-left: 8rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  position: relative;
  svg {
    position: absolute;
    top: -0.3rem;
    left: 0;
  }
`;

interface PostDifficultyProps {
  level: string;
  showLabel?: boolean;
}

export const PostDifficulty: FC<PostDifficultyProps> = ({ level, showLabel = false }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            levels {
              id
              title
              icon
            }
          }
        }
      }
    `
  );

  const data: ILevelData = find(site.siteMetadata.levels, ['id', level]);

  return (
    <SPostDifficulty to={`/levels/${kebabCase(data.title)}`}>
      <Icon name={data.icon} height="16px" color="text" />
      {showLabel ? data.title : ''}
    </SPostDifficulty>
  );
};
