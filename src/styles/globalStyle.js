import { createGlobalStyle } from 'styled-components';
import { font } from './fonts';

const GlobalStyle = createGlobalStyle`
${font}
/* rem px 1:1 대응 */
html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
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
h1 {
  font-size:2.8rem;
}
h2 {
  font-size:2.2rem;
}
h3 {
  font-size: 2.0rem;
}
h4 {
  font-size: 1.8rem;
}
li,
span,
p {
  font-size: 1.6rem;
}
button {
  font-size: 1.4rem;
}
/* 다크모드 반응 코드 */
body {
  background-color: ${({ theme }) => theme.bgc};
}

/* 태그의 텍스트 없애기  */
.hidingTexts {
  text-indent:100%;
  white-space: nowrap;
  overflow: hidden;
}
`;

export default GlobalStyle;
