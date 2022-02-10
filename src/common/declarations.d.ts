import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     bp: any;
//   }
// }

declare module '*.svg' {
  const content: any;
  export default content;
}
