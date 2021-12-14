import React, { FC, useMemo } from 'react';
import { find, kebabCase } from 'lodash';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Icon } from './Icon';
import { ILevelData, ROUTES } from '../common';

const difficulty = css`
  display: block;
  //padding-left: 8rem;
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

const SPostDifficultyLink = styled((props) => <Link {...props} />)`
  ${difficulty}
`;
const SPostDifficulty = styled.div`
  ${difficulty}
`;

interface PostDifficultyProps {
  level: string;
  showLabel?: boolean;
  asLink?: boolean;
}

export const PostDifficulty: FC<PostDifficultyProps> = ({ level, asLink = false, showLabel = false }) => {
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

  const content = useMemo(
    () => (
      <>
        <Icon name={data.icon} height="30px" color="accent" />
        {showLabel ? data.title : ''}
      </>
    ),
    [showLabel, data.icon, data.title]
  );

  return (
    <>
      {asLink ? (
        <SPostDifficultyLink to={`${ROUTES.LEVEL}/${kebabCase(data.title)}`}>{content}</SPostDifficultyLink>
      ) : (
        <SPostDifficulty>{content}</SPostDifficulty>
      )}
    </>
  );
};
