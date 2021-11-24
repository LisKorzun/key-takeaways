import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { groupByLetter, IGroupedField } from '../common';
import { PercentageRow } from './PercentageRow';

const SAlphabetList = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
  margin-bottom: 2rem;
  padding: 2rem 0 0;
  border-top: 1px solid ${({ theme }) => theme.primaryRGBA};
  width: 100%;
  h4 {
    font-size: calc(3rem + 1vw);
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
  }
  ol {
    margin: 0;
    width: 100%;
  }
`;

interface AlphabetListProps {
  list: IGroupedField[];
  total: number;
  baseUrl: string;
}

export const AlphabetList: FC<AlphabetListProps> = ({ list, total, baseUrl }) => {
  const groups = groupByLetter(list);
  return (
    <>
      {groups.map(({ items, letter }) => (
        <SAlphabetList key={letter}>
          <h4>{letter}</h4>
          <ol>
            {items.map(({ fieldValue, totalCount }) => (
              <PercentageRow
                key={fieldValue}
                to={`${baseUrl}/${kebabCase(fieldValue)}`}
                count={totalCount}
                total={total}
              >
                {fieldValue}
              </PercentageRow>
            ))}
          </ol>
        </SAlphabetList>
      ))}
    </>
  );
};
