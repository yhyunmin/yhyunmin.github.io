import React from 'react';
import Tag from '@components/Atoms/Tag/Tag';
import { styled } from 'styled-components';
import { useTagList } from 'src/store/ArticleStore';
import { useNavigate } from 'react-router-dom';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const TagList = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = ({ title }) => {
    navigate(`/articles?tag=${title}`);
  };
  const tagList = useTagList();
  return (
    <Ul className={className}>
      {tagList &&
        tagList.map(tag => (
          <Tag
            key={tag.id}
            title={tag.tag}
            count={tag.count}
            onClick={handleClick(tag.tag)}
          />
        ))}
    </Ul>
  );
};

export default TagList;
