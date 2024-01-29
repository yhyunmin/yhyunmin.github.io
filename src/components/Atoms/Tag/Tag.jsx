import React from 'react';
import { styled } from 'styled-components';

const StyledTag = styled.button`
  border: 0.1rem solid #eee;
  border-radius: 5px;
  padding: 4px 8px;
  opacity: 0.9;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 400;
  &:hover {
    opacity: 1;
  }
  span {
    font-size: 1.4rem;
  }
`;
const Tag = ({ title, count }) => {
  return (
    <li>
      <StyledTag className='borderColor'>
        {title} <span>({count})</span>
      </StyledTag>
    </li>
  );
};

export default Tag;
