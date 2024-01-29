import React from 'react';
import { styled } from 'styled-components';

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  border: 0.1rem solid #eee;
  border-radius: 5px;
  padding: 4px 8px;
  text-transform: capitalize;
  border-color: ${props => props.theme.borderColor};
  background-color: ${props => props.theme.elavateColor};
  p {
    opacity: 0.9;
    font-size: 1.4rem;
  }
  &:hover {
    opacity: 1;
  }
  span {
    opacity: 0.7;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;
const Tag = ({ title, count }) => {
  return (
    <li>
      <StyledTag className='borderColor'>
        <p>{title}</p>
        <span>({count})</span>
      </StyledTag>
    </li>
  );
};

export default Tag;
