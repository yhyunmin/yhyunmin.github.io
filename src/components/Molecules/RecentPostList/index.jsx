import RecentPost from '@components/Atoms/RecentPost/RecentPost';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const StyledRecentPost = styled(RecentPost)`
  font-size: 1.4rem;
`;

const RecentPostList = ({ localStorage }) => {
  return (
    <Container>
      <h4>최근 본 포스트</h4>
      {localStorage &&
        localStorage.map(post => {
          return (
            <StyledRecentPost key={`${post.id}-${post.title}`} post={post} />
          );
        })}
    </Container>
  );
};

export default RecentPostList;
