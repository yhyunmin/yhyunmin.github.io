import React from 'react';
import { styled } from 'styled-components';

const SVG = styled.svg`
  /* & path:not(.sun) {
    transition: transform 0.5s linear, opacity 0.5s linear;
  } */
`;
const SunIcon = ({ width, height, fill, ...props }) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='mdi_sun'>
        <path
          d='M5.325 28.635L7.44 30.75L10.14 28.065L8.01 25.935'
          fill={fill}
          {...props}
        />

        {/* <!-- 태양 --> */}
        <path
          className='sun'
          d='M18 9C13.035 9 9 13.035 9 18C9 22.965 13.035 27 18 27C22.965 27 27 22.965 27 18C27 13.02 22.965 9 18 9Z'
          fill={fill}
        />

        <path id='Vector3' d='M30 19.5H34.5V16.5H30' fill={fill} {...props} />

        <path
          d='M25.86 28.065L28.56 30.75L30.675 28.635L27.99 25.935'
          fill={fill}
          {...props}
        />
        <path
          d='M30.675 7.5L28.56 5.4L25.86 8.085L27.99 10.215'
          fill={fill}
          {...props}
        />
        <path d='M19.5 1.5H16.5V6H19.5' fill={fill} {...props} />
        <path
          d='M10.14 8.085L7.44 5.4L5.325 7.5L8.01 10.215L10.14 8.085Z'
          fill={fill}
          {...props}
        />
        <path d='M1.5 19.5H6V16.5H1.5' fill={fill} {...props} />
        <path d='M19.5 30H16.5V34.5H19.5' fill={fill} {...props} />
      </g>
    </SVG>
  );
};

export default SunIcon;
