import React from 'react';
import Tag from '@components/Atoms/Tag/Tag';
import { styled } from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const TagList = () => {
  return (
    <Ul>
      <Tag title='Javascript' count={4} />
      <Tag title='React' count={2} />
      <Tag title='Typescript' count={2} />
      <Tag title='UXUI' count={2} />
      <Tag title='React' count={2} />
      <Tag title='React' count={2} />
    </Ul>
  );
};

export default TagList;
