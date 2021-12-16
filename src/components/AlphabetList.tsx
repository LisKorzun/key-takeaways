import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { groupByLetter, IGroupedField } from '../common';
import { PercentageRow } from './PercentageRow';

const SAlphabetList = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  margin-bottom: 2rem;
  padding: 0 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.accentRGBA};
  width: 100%;
  h4 {
    font-size: 3rem;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
    margin: 0;
    padding-left: 5px;
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
        <SAlphabetList key={letter} id={`letter-${letter}`}>
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
