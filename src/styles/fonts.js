import { css } from 'styled-components';

import PretendardBold from '../assets/font/Pretendard-Bold.woff2';
import PretendardRegular from '../assets/font/Pretendard-Regular.woff2';
import PretendardExtraLight from '../assets/font/Pretendard-ExtraLight.woff2';
import PretendardSemiBold from '../assets/font/Pretendard-SemiBold.woff2';
import D2Coding from '../assets/font/D2Coding.woff2';
// import PretendardBold from '@font/Pretendard-Bold.woff2';
// import PretendardRegular from '@font/Pretendard-Regular.woff2';
// import PretendardExtraLight from '@font/Pretendard-ExtraLight.woff2';
// import PretendardSemiBold from '@font/Pretendard-SemiBold.woff2';
// import D2Coding from '@font/D2Coding.woff2';

export const font = css`
  /* @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local('Pretendard') url(${PretendardRegular}) format('woff2');
  } */

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: normal;
    /* 폰트최적화를위한 swap */
    font-display: swap;
    src: local('Pretendard') url(${PretendardExtraLight}) format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    /* 폰트최적화를위한 swap */
    font-display: swap;
    src: local('Pretendard') url(${PretendardSemiBold}) format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    /* 폰트최적화를위한 swap */
    font-display: swap;
    src: local('Pretendard') url(${PretendardBold}) format('woff2');
  }
  @font-face {
    font-family: 'D2Coding';
    font-style: normal;
    font-weight: normal;
    /* 폰트최적화를위한 swap */
    font-display: swap;
    src: local('D2coding') url(${D2Coding}) format('woff2');
  }
`;
