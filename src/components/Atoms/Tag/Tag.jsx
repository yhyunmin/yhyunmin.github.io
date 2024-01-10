import React from 'react';
import { styled } from 'styled-components';

const StyledTag = styled.button`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  padding: 4px 8px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  span {
    font-size: 1.2rem;
  }
`;
const Tag = ({ title, count }) => {
  return (
    <li>
      <StyledTag>
        {title} <span>({count})</span>
      </StyledTag>
    </li>
  );
};

export default Tag;
