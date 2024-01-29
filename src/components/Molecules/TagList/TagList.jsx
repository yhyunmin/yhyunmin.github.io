import React from 'react';
import Tag from '@components/Atoms/Tag/Tag';
import { styled } from 'styled-components';
import { useTagList } from 'src/store/ArticleStore';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const TagList = () => {
  const tagList = useTagList();
  return (
    <Ul>
      {tagList &&
        tagList.map(tag => (
          <Tag key={tag.id} title={tag.tag} count={tag.count} />
        ))}
    </Ul>
  );
};

export default TagList;
