export const device = {
  mobileOnly: `(max-width: 480px)`,
  mobileUp: `(min-width: 480px)`,
  tabletSUp: `(min-width: 640px)`,
  tabletUp: `(min-width: 768px)`,
  laptopUp: `(min-width: 1024px)`,
  desktopUp: `(min-width: 1281px)`,
  desktopXLUP: `(min-width: 1440px)`,

  iphoneXPortrait: `(min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait)`,
  iphoneXLandscape: `(min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape)  `,
  laptopRetina: `(min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi)`,
  laptopNonRetina: `(min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1)`,
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
};
