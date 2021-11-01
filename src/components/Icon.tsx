import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import Level0Icon from '../assets/svg/level-0.svg';
import Level1Icon from '../assets/svg/level-1.svg';
import Level2Icon from '../assets/svg/level-2.svg';
import Level3Icon from '../assets/svg/level-3.svg';
import Level4Icon from '../assets/svg/level-4.svg';
import Level5Icon from '../assets/svg/level-5.svg';

interface IconStylesProps {
  width?: string;
  color?: string;
}

const svgStyles = ({ width, color }: IconStylesProps) => css`
  width: ${width || '35px'};
  fill: ${color || '#1B263B'}
`;

export const enum IconNames {
  LEVEL_0 = 'Level-0',
  LEVEL_1 = 'Level-1',
  LEVEL_2 = 'Level-2',
  LEVEL_3 = 'Level-3',
  LEVEL_4 = 'Level-4',
  LEVEL_5 = 'Level-5',
}
export const StyledLevel0Icon = styled(Level0Icon)`
  ${(props) => svgStyles(props)}
`;
export const StyledLevel1Icon = styled(Level1Icon)`
  ${(props) => svgStyles(props)}
`;
export const StyledLevel2Icon = styled(Level2Icon)`
  ${(props) => svgStyles(props)}
`;
export const StyledLevel3Icon = styled(Level3Icon)`
  ${(props) => svgStyles(props)}
`;
export const StyledLevel4Icon = styled(Level4Icon)`
  ${(props) => svgStyles(props)}
`;
export const StyledLevel5Icon = styled(Level5Icon)`
  ${(props) => svgStyles(props)}
`;

interface IconProps extends IconStylesProps {
  name: string;
}
export const Icon: FC<IconProps> = ({ name, ...other }) => {
  switch (name) {
    case IconNames.LEVEL_0:
      return <StyledLevel0Icon {...other} />;
    case IconNames.LEVEL_1:
      return <StyledLevel1Icon {...other} />;
    case IconNames.LEVEL_2:
      return <StyledLevel2Icon {...other} />;
    case IconNames.LEVEL_3:
      return <StyledLevel3Icon {...other} />;
    case IconNames.LEVEL_4:
      return <StyledLevel4Icon {...other} />;
    case IconNames.LEVEL_5:
      return <StyledLevel5Icon {...other} />;
    default:
      return <></>;
  }
};
