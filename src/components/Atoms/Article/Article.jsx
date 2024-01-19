import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Dates = styled.time``;
const Tag = styled.span``;
const Title = styled.h2`
  cursor: pointer;
`;
const Subtitle = styled.h3``;
const ReadMore = styled.button`
  cursor: pointer;
`;

const Article = ({ attributes = {}, onClick }) => {
  console.log(attributes, 'attirbutes');
  return (
    <article>
      {attributes && (
        <>
          <Dates>{attributes.date}</Dates>
          <Tag className='tag'>{attributes.tags}</Tag>
          <Title onClick={() => onClick()}>{attributes.title}</Title>
          <Subtitle>{attributes.description} </Subtitle>
          <ReadMore onClick={() => onClick()}>Read More</ReadMore>
        </>
      )}
    </article>
  );
};

export default Article;
