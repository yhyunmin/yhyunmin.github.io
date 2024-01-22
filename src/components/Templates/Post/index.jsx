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
  flex-direction: column;
  width: 144rem;
  /* height: 100vh; */
  background-color: cyan;
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BannerSection = styled.aside`
  width: 21rem;
  background-color: salmon;
`;
const PostSection = styled.section`
  width: 116.2rem;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4.8rem;
  width: 100%;
  padding: 20px 0;
  margin: 20px 0;
  border-bottom: 1px solid #aaa;
`;
const Contents = styled.div``;
const Template = ({ post }) => {
  console.log(post);
  return (
    <Container>
      <Title>{post && post.attributes.title}</Title>
      <SectionWrapper>
        <BannerSection>
          <Profile />
        </BannerSection>
        <PostSection>
          <Contents>
            <ReactMarkdown>{post && post.body}</ReactMarkdown>
          </Contents>
        </PostSection>
      </SectionWrapper>
    </Container>
  );
};

export default Template;
