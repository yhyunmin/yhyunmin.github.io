import React from 'react';
import { light, dark } from '@styles/theme';
import { useTheme } from 'styled-components';
const ColorGuide = () => {
  const theme = useTheme();
  const color = theme === light ? light : dark;
  return (
    <aside
      style={{
        backgroundColor: color.elavateColor,
        border: `1px solid ${color.borderColor}`,
      }}>
      <p>Pretendard {color.iconColor}</p>
      <h1>HEADING {color.heading}</h1>
      <p>SUBTITLE {color.subtitle}</p>
      <p style={{ color: color.primary }}>Primary {color.primary}</p>
      <div style={{ backgroundColor: color.primary }}></div>
    </aside>
  );
};

export default ColorGuide;
