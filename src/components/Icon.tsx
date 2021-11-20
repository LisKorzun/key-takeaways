import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { DefaultThemeKeys, ICONS } from '../common';
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
import ArrowRightIcon from '../assets/svg/arrow-right.svg';
import ReactIcon from '../assets/svg/react-logo.svg';
import TimeIcon from '../assets/svg/time.svg';
import DateIcon from '../assets/svg/date.svg';

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
export const SArrowRightIcon = styled(ArrowRightIcon)`
  ${svgStyles}
`;
export const SReactIcon = styled(ReactIcon)`
  ${svgStyles}
`;
export const STimeIcon = styled(TimeIcon)`
  ${svgStyles}
`;
export const SDateIcon = styled(DateIcon)`
  ${svgStyles}
`;

interface IconProps extends IconStylesProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name, ...other }) => {
  switch (name) {
    case ICONS.LEVEL_0:
      return <SLevel0Icon {...other} />;
    case ICONS.LEVEL_1:
      return <SLevel1Icon {...other} />;
    case ICONS.LEVEL_2:
      return <SLevel2Icon {...other} />;
    case ICONS.LEVEL_3:
      return <SLevel3Icon {...other} />;
    case ICONS.LEVEL_4:
      return <SLevel4Icon {...other} />;
    case ICONS.LEVEL_5:
      return <SLevel5Icon {...other} />;
    case ICONS.CODE:
      return <SCodeIcon {...other} />;
    case ICONS.TOPICS:
      return <STopicsIcon {...other} />;
    case ICONS.ABOUT:
      return <SAboutIcon {...other} />;
    case ICONS.LEVELS:
      return <SLevelsIcon {...other} />;
    case ICONS.TAG:
      return <STagIcon {...other} />;
    case ICONS.ARROW_RIGHT:
      return <SArrowRightIcon {...other} />;
    case ICONS.REACT_LOGO:
      return <SReactIcon {...other} />;
    case ICONS.TIME:
      return <STimeIcon {...other} />;
    case ICONS.DATE:
      return <SDateIcon {...other} />;
    default:
      return <></>;
  }
};
