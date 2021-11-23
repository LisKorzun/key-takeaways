import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { groupByLetter, IGroupedField } from '../common';
import { PercentageRow } from './PercentageRow';

const SAlphabetList = styled.div`
  display: flex;
  margin: 2rem 0;
  padding: 2rem 0 0;
  border-top: 1px solid ${(props) => props.theme.border};
  h4 {
    font-size: calc(4rem + 0.5vw);
    line-height: normal;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 3.5rem;
    color: ${(props) => props.theme.primary};
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
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
                label={fieldValue}
                to={`${baseUrl}/${kebabCase(fieldValue)}`}
                count={totalCount}
                total={total}
              />
            ))}
          </ol>
        </SAlphabetList>
      ))}
    </>
  );
};
