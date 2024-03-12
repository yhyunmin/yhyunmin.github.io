import React, { memo } from 'react';
import { ReactComponent as MoonIcon } from '@img/mdi_moon.svg';
import { styled } from 'styled-components';
import { useTheme } from 'src/store/ThemeStore';
import SunIcon from './SunIcon';
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  height: min-content;
  padding: 0.4rem;
  & > svg {
    top: 0;
    left: 0;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    /* opacity: 0.5; */
    /* transition: all 0.2s linear; */
  }
  svg {
    /* transition: all 0.2s linear; */
  }
`;

const DarkTheme = memo(({ ...props }) => {
  const theme = useTheme();
  return (
    <Button {...props}>
      <SunIcon
        width={24}
        height={24}
        fill={theme ? 'orange' : '#ffd285'}
        transform={theme ? ' translate(0,0)' : 'translate(-30,0)'}
        opacity={theme ? 1 : 0}
      />
      <span
        style={{
          transform: theme ? 'translate(26px, 4px)' : 'translate(9px, 2px)',
        }}>
        <MoonIcon width={24} height={24} fill={theme ? '#f8f8f8' : '#282828'} />
      </span>
    </Button>
  );
});

export default DarkTheme;
