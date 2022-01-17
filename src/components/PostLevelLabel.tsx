import React, { FC } from 'react';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Icon } from './Icon';
import { ILevelData, ROUTES } from '../common';

const SPostLevelLabel = styled((props) => <Link {...props} />)`
  display: block;
  text-transform: uppercase;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accentRGBA};
  position: relative;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3.5rem;
  svg {
    position: absolute;
    top: 5px;
    left: 10px;
  }
`;

interface PostLevelProps {
  level: string;
}
export const PostLevelLabel: FC<PostLevelProps> = ({ level }) => {
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
    <SPostLevelLabel to={`${ROUTES.LEVEL}/${kebabCase(data.title)}`}>
      <Icon name={data.icon} height="30px" color="text" />
      {data.title}
    </SPostLevelLabel>
  );
};
