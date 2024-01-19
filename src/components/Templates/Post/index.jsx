import Profile from '@components/Molecules/Profile';
import React from 'react';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 144rem;
  height: 100vh;
  background-color: cyan;
`;
const BannerSection = styled.aside`
  width: 21rem;
  background-color: salmon;
`;
const PostSection = styled.section`
  width: 116.2rem;
`;
const Title = styled.h1``;
const Contents = styled.div``;
const Template = ({ post }) => {
  return (
    <Container>
      <BannerSection>
        <Profile />
      </BannerSection>
      <PostSection>
        <Contents>
          <Title>{post && post.attributes.title}</Title>
          <ReactMarkdown>{post && post.body}</ReactMarkdown>
        </Contents>
      </PostSection>
    </Container>
  );
};

export default Template;
