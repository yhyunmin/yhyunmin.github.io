import { createGlobalStyle } from 'styled-components';
import { font } from './fonts';

export const globalStyle = createGlobalStyle`
${font}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
}
`;
