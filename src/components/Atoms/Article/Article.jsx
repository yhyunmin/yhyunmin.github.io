import React from 'react';
import { styled } from 'styled-components';

const Dates = styled.time``;
const Tag = styled.span``;
const Title = styled.h2``;
const Subtitle = styled.h3``;
const ReadMore = styled.p``;

const Article = () => {
  return (
    <article>
      <Dates>JANUARY 2024</Dates> <span className='tag'>ReactRouter</span>
      <Title>
        React Router - createBrowserRouter 에서 createHashRouter 그리고
      </Title>
      <Subtitle>data API 이용하여 router 사용 해보기 </Subtitle>
      <ReadMore>Read more</ReadMore>
    </article>
  );
};

export default Article;
