import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultThemeKeys } from '../common';
import Level0Icon from '../assets/svg/level-0.svg';
import Level1Icon from '../assets/svg/level-1.svg';
import Level2Icon from '../assets/svg/level-2.svg';
import Level3Icon from '../assets/svg/level-3.svg';
import Level4Icon from '../assets/svg/level-4.svg';
import Level5Icon from '../assets/svg/level-5.svg';
import CodeIcon from '../assets/svg/code.svg';
import TopicsIcon from '../assets/svg/topics.svg';
import AboutIcon from '../assets/svg/about.svg';
import LevelsIcon from '../assets/svg/levels.svg';
import TagIcon from '../assets/svg/tag.svg';

interface IconStylesProps {
  readonly color: DefaultThemeKeys;
  readonly width?: string;
  readonly height?: string;
  readonly opacity?: number;
}

const svgStyles = css<IconStylesProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  fill: ${(props) => props.theme[props.color]};
  opacity: ${(props) => props.opacity || 1};
`;

export const SLevel0Icon = styled(Level0Icon)`
  ${svgStyles}
`;
export const SLevel1Icon = styled(Level1Icon)`
  ${svgStyles}
`;
export const SLevel2Icon = styled(Level2Icon)`
  ${svgStyles}
`;
export const SLevel3Icon = styled(Level3Icon)`
  ${svgStyles}
`;
export const SLevel4Icon = styled(Level4Icon)`
  ${svgStyles}
`;
export const SLevel5Icon = styled(Level5Icon)`
  ${svgStyles}
`;
export const SCodeIcon = styled(CodeIcon)`
  ${svgStyles}
`;
export const STopicsIcon = styled(TopicsIcon)`
  ${svgStyles}
`;
export const SAboutIcon = styled(AboutIcon)`
  ${svgStyles}
`;
export const SLevelsIcon = styled(LevelsIcon)`
  ${svgStyles}
`;
export const STagIcon = styled(TagIcon)`
  ${svgStyles}
`;

export const enum IconNames {
  LEVEL_0 = 'Level-0',
  LEVEL_1 = 'Level-1',
  LEVEL_2 = 'Level-2',
  LEVEL_3 = 'Level-3',
  LEVEL_4 = 'Level-4',
  LEVEL_5 = 'Level-5',
  CODE = 'code',
  TOPICS = 'topics',
  ABOUT = 'about',
  LEVELS = 'levels',
  TAG = 'tag'
}

interface IconProps extends IconStylesProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name, ...other }) => {
  switch (name) {
    case IconNames.LEVEL_0:
      return <SLevel0Icon {...other} />;
    case IconNames.LEVEL_1:
      return <SLevel1Icon {...other} />;
    case IconNames.LEVEL_2:
      return <SLevel2Icon {...other} />;
    case IconNames.LEVEL_3:
      return <SLevel3Icon {...other} />;
    case IconNames.LEVEL_4:
      return <SLevel4Icon {...other} />;
    case IconNames.LEVEL_5:
      return <SLevel5Icon {...other} />;
    case IconNames.CODE:
      return <SCodeIcon {...other} />;
    case IconNames.TOPICS:
      return <STopicsIcon {...other} />;
    case IconNames.ABOUT:
      return <SAboutIcon {...other} />;
    case IconNames.LEVELS:
      return <SLevelsIcon {...other} />;
    case IconNames.TAG:
      return <STagIcon {...other} />;
    default:
      return <></>;
  }
};
