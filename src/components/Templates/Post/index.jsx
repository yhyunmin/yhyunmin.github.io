import Profile from '@components/Molecules/Profile';
import React from 'react';
import { styled } from 'styled-components';

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
const Template = () => {
  return (
    <Container>
      <BannerSection>
        <Profile />
      </BannerSection>
      <PostSection>
        <Title>POST PAGE</Title>
        <Contents>CONTENT</Contents>
      </PostSection>
    </Container>
  );
};

export default Template;
