import { createGlobalStyle } from 'styled-components';
import { font } from './fonts';

const GlobalStyle = createGlobalStyle`
${font}
* {
  transition: color 0.2s linear, background-color 0.2s linear, fill 0.2s linear;

}
/* rem px 1:1 대응 */
html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
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
  @media (max-width: 500px) {
    line-height: 2;
  }
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

/* markdown style */
pre {
  margin: 2rem 0;
  padding: 4rem;
  border-radius: 12px;
  //media 500px
  @media (max-width: 500px) {
    margin: 1.2rem 0;
  padding: 2rem;
  text-wrap:balance;
  }
}
code {
  font-size: 1.6rem;
  font-family: D2coding;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
}
blockquote {
  position: relative;
  margin: 2rem 0;
  padding: 2rem 4rem;
  font-weight: 600;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 0.4rem;
    height: 100%;
    background-color:  ${({ theme }) => theme.primary};
  }
  
}

/* 태그의 텍스트 없애기  */
.hidingTexts {
  text-indent:100%;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  font-size: 0.1px;
}

.subTitle {
  opacity: 0.8;
}
/* 다크모드 반응 코드 */
/* css 변수로 리팩토링   */
body {
  background-color: ${({ theme }) => theme.bgc};
}
h1 {
  color: ${({ theme }) => theme.heading};
}
h2 {
  color: ${({ theme }) => theme.heading};
}

h3 {
  color: ${({ theme }) => theme.subtitle};
}
h4 {
  color: ${({ theme }) => theme.subtitle};
}
h5 {
  color: ${({ theme }) => theme.subtitle};
}
h6 {
  color: ${({ theme }) => theme.subtitle};
}
p {
  color: ${({ theme }) => theme.subtitle};
}
li {
  color: ${({ theme }) => theme.subtitle};

}
a {
  color: ${({ theme }) => theme.primary};
}
button { 
  background-color: ${({ theme }) => theme.elevateColor};
  color: ${({ theme }) => theme.heading};
}
pre {
  background-color: ${({ theme }) => theme.elevateColor};
}
code {
  background-color: ${({ theme }) => theme.elevateColor};
  color : ${({ theme }) => theme.subtitle};
}
blockquote {
  background-color: ${({ theme }) => theme.elevateColor};
  color : ${({ theme }) => theme.subtitle};
  
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
.primary {
  fill: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
}
svg.headingColor {
  fill: ${({ theme }) => theme.heading};
}
`;
export default GlobalStyle;
