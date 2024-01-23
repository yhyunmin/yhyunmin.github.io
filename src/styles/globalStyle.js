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
  letter-spacing: 0.032rem;
  line-height: 1.625;
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

pre {
  margin: 2rem 0;
  padding: 4rem;
  border-radius: 12px;
}
code {
  font-size: 1.6rem;
  font-family: D2coding;

}
/* 태그의 텍스트 없애기  */
.hidingTexts {
  text-indent:100%;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  font-size: 0.1px;
}

/* 다크모드 반응 코드 */
body {
  background-color: ${({ theme }) => theme.bgc};
}
h1 {
  color: ${({ theme }) => theme.heading};
}
h2 {
  color: ${({ theme }) => theme.heading};
}
p {
  color: ${({ theme }) => theme.subtitle};
}
a {
  color: ${({ theme }) => theme.primary};
}
button { 
  background-color: ${({ theme }) => theme.elavateColor};
  color: ${({ theme }) => theme.heading};
}
pre {
  background-color: ${({ theme }) => theme.elavateColor};
}
code {
  background-color: ${({ theme }) => theme.elavateColor};
}
time {
color : ${({ theme }) => theme.subtitle};
}
span {
  color: ${({ theme }) => theme.subtitle};
}
.borderColor {
  border-color: ${({ theme }) => theme.borderColor} !important;
}
a.navColor {
  color: ${({ theme }) => theme.heading};
}
svg.primary {
  fill: ${({ theme }) => theme.primary};
}
svg.headingColor {
  fill: ${({ theme }) => theme.heading};
}
`;
export default GlobalStyle;
