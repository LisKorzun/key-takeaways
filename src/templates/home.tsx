import React, { FC } from 'react';
import { take } from 'lodash';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { find } from 'lodash';
import { STitleOfList } from '../components/common';
import { IPost } from '../common';
import styled from 'styled-components';
import ReactIcon from '../assets/svg/react-logo.svg';
import { Card } from '../components/card';
import { Icon } from '../components/Icon';

const TitleCont = styled.div`
  display: flex;
`;
const SDesct = styled.div`
  color: ${(props) => props.theme.secondary};
  font-weight: 300;
`;

const TitleC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogoC = styled.div`
  width: 40vw;
  min-width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const STitle = styled.h2`
  font-size: 50px;
  margin: 0;
`;

const Separator = styled.div`
  width: 100px;
  margin: 30px 0;
  border-bottom: ${(props) => `8px solid ${props.theme.primary}`};
`;

const LogoReact = styled(ReactIcon)`
  fill: ${(props) => props.theme.secondary};
  width: 400px;
`;

const LevelsContainer = styled.div`
  margin-bottom: 100px;
  margin-top: 50px;
  background-color: ${(props) => `${props.theme.secondary}`};
  padding-top: 70px;
  padding-bottom: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.primary};
    font-weight: 200;
    font-size: 40px;
    margin: 0 0 30px;
  }
`;

const LevelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

const LevelCard = styled.div`
  padding-top: 50px;
  padding-left: 20px;
  width: 100%;
  font-size: 30px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;
  border: ${(props) => `1px solid ${props.theme.background}`};
  color: ${(props) => `${props.theme.background}`};

  & span {
    align-self: flex-end;
    margin-top: 20px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 6px;
    margin-bottom: 10px;
    border: ${(props) => `1px solid${props.theme.background}`};
    color: ${(props) => `${props.theme.secondary}`};
    background-color: ${(props) => `${props.theme.background}`};
  }
`;

interface Props {
  pageContext: {
    levels: { fieldValue: string; totalCount: string }[];
    levelsData: { id: string; title: string }[];
    posts: IPost[];
  };
}

const Home: FC<Props> = ({ pageContext }) => {
  const { levels, levelsData, posts } = pageContext;

  return (
    <Layout>
      <Seo title="Home" />
      <TitleCont>
        <TitleC>
          <STitle>Key Takeaways</STitle>
          <Separator />
          <SDesct>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </SDesct>
        </TitleC>
        <LogoC>
          <LogoReact />
        </LogoC>
      </TitleCont>
      <LevelsContainer>
        <h3>Competency Levels</h3>
        <LevelsWrap>
          {levels.map((l) => {
            const level = find(levelsData, ['id', l.fieldValue]);
            const iconName = `Level-${l.fieldValue}`;
            return (
              <>
                {level && (
                  <LevelCard key={l.fieldValue}>
                    <Icon name={iconName} width="90px" color="#06BCF0" />
                    {level.title}
                    <span>{l.totalCount} articles</span>
                  </LevelCard>
                )}
              </>
            );
          })}
        </LevelsWrap>
      </LevelsContainer>
      <TitleC>
        <STitleOfList>Recent Posts</STitleOfList>
        <div>
          {take(posts, 5).map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </TitleC>
    </Layout>
  );
};

export default Home;
