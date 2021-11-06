import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Layout, Seo, Banner, Icon, SFlexRowContainer } from '../components';
import { IGroupedField, LABELS, ROUTES, ICONS } from '../common';

const STags = styled.div`
  margin-top: 10px;
  display: flex;

  & a {
    margin-right: 20px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 7px 14px;
    border: 1px solid #eee;
    border-radius: 15px;
    justify-content: center;
    color: ${(props) => props.theme.text};
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.background};
    }
  }
`;

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const TagsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.TAGS} />
    <Banner title={LABELS.TAGS} icon={ICONS.TAG} />
    <SFlexRowContainer>
      <STags>
        {data.allMdx.group.map(({ fieldValue }) => (
          <Link key={fieldValue} to={`${ROUTES.TAGS}/${kebabCase(fieldValue)}`}>
            <Icon name={ICONS.TAG} height="13px" color="secondary" /> {fieldValue}
          </Link>
        ))}
      </STags>
    </SFlexRowContainer>
  </Layout>
);

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
