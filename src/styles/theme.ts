import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  bp: {
    xxsOnly: `(max-width: 480px)`,
    xsOnly: `(min-width: 480px) and (max-width: 639px)`,
    xsUp: `(min-width: 480px)`,
    sOnly: `(min-width: 640px) and (max-width: 767px)`,
    sUp: `(min-width: 640px)`,
    mOnly: `(min-width: 768px) and (max-width: 1023px)`,
    mUp: `(min-width: 768px)`,
    lOnly: `(min-width: 1024px) and (max-width: 1439px)`,
    lUp: `(min-width: 1024px)`,
    xlUp: `(min-width: 1440px)`,
    small: `(max-width: 639px)`,
    medium: `(min-width: 640px) and (max-width: 1023px)`,
    large: `(min-width: 1024px)`,
  },
};
