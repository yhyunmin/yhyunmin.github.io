import RecentPost from '@components/Atoms/RecentPost/RecentPost';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentPostList = ({ localStorage }) => {
  return (
    <Container>
      <h4>최근 본 포스트</h4>
      {localStorage &&
        localStorage.map(post => {
          return <RecentPost key={`recent-post-${post}`} post={post} />;
        })}
    </Container>
  );
};

export default RecentPostList;
