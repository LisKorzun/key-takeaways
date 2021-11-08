export const device = {
  mobileOnly: `(max-width: 480px)`,
  mobileUp: `(min-width: 480px)`,
  tabletUp: `(min-width: 768px)`,
  laptopUp: `(min-width: 1024px)`,
  desktopUp: `(min-width: 1281px)`,

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
};
