import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Dates = styled.time``;
const Tag = styled.span``;
const Title = styled.h2``;
const Subtitle = styled.h3``;
const ReadMore = styled.p``;

const Article = ({ attributes = {} }) => {
  console.log(attributes, 'attirbutes');
  return (
    <article>
      {attributes && (
        <>
          <Dates>{attributes.date}</Dates>
          <Tag className='tag'>{attributes.tags}</Tag>
          <Title>{attributes.title}</Title>
          <Subtitle>{attributes.description} </Subtitle>
          <ReadMore>Read More</ReadMore>
        </>
      )}
    </article>
  );
};

export default Article;
