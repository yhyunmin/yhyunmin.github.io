import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LeftArrowIcon } from '@img/mdi_arrow_left.svg';
const Btn = styled.button`
  display: flex;
  height: min-content;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-weight: 600;
  order: 3;
  color: ${({ theme }) => theme.primary};
  margin-left: 1.2rem;
  svg {
    fill: ${({ theme }) => theme.primary};
    transform: translateX(50%);
    opacity: 0;
    transition: ease-in-out 0.2s all;
  }
  &:hover {
    opacity: 1;
    svg {
      transform: translateX(0%);
      opacity: 0.9;
    }
  }
`;

const BackBtn = ({ ...props }) => {
  return (
    <Btn {...props}>
      <LeftArrowIcon width={16} height={16} />
      Back to the blog
    </Btn>
  );
};

export default BackBtn;
