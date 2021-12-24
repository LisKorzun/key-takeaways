import React, { FC } from 'react';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Icon } from './Icon';
import { ILevelData, ROUTES } from '../common';

const SPostLevel = styled((props) => <Link {...props} />)`
  display: block;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  position: relative;
  min-height: 1.2rem;
  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

interface PostLevelProps {
  level: string;
}

export const PostLevel: FC<PostLevelProps> = ({ level }) => {
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
    <SPostLevel to={`${ROUTES.LEVEL}/${kebabCase(data.title)}`}>
      <Icon name={data.icon} height="30px" color="accent" />
    </SPostLevel>
  );
};
