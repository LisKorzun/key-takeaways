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
  border-top: 1px solid ${({ theme }) => theme.accentRGBA};
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

const SLetterRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

const SHeaderNav = styled.div`
  background: ${({ theme }) => theme.primaryRGBA};
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 15px;
    white-space: nowrap;
    padding: 0 1rem;
    line-height: 26px;
  }
`;

export const AlphabetList: FC<AlphabetListProps> = ({ list, total, baseUrl }) => {
  const groups = groupByLetter(list);
  return (
    <>
      {groups.map(({ items, letter }) => (
        <SLetterRow key={letter} id={`letter-${letter}`}>
          <div>{letter}</div>
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
        </SLetterRow>
      ))}
    </>
  );
};
