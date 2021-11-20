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
  color: ${(props) => props.theme.accent};
  position: relative;
  svg {
    position: absolute;
    top: -0.3rem;
    left: 0;
  }
`;

interface PostDifficultyProps {
  level: string;
}

export const PostDifficulty: FC<PostDifficultyProps> = ({ level }) => {
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
      <Icon name={data.icon} height="16px" color="accent" />
      {data.title}
    </SPostDifficulty>
  );
};
