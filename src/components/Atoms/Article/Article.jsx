import React from 'react';
import { styled } from 'styled-components';

const Dates = styled.time``;
const Tag = styled.span``;
const Title = styled.h2``;
const Subtitle = styled.h3``;
const ReadMore = styled.p``;

const Article = contents => {
  return (
    <article>
      <Dates>{}</Dates> <Tag className='tag'>{}</Tag>
      <Title>{}</Title>
      <Subtitle>{} </Subtitle>
      <ReadMore>{}</ReadMore>
    </article>
  );
};

export default Article;
