import React from 'react';
import Header from '../../Organisms/Header/Header';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.main`
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 140px;
  display: flex;
  justify-content: space-between;
  width: 144rem;
  height: 100vh;
  /* mobile */
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    gap: 1.6rem;
  }
`;
const HeaderLayout = styled(Header)`
  /* css */
  width: 32.9rem;
  display: flex;
  flex-direction: column;
  ol,
  ul {
    list-style: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ContentsLayout = styled.main`
  width: 92.4rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Template = () => {
  return (
    <>
      <Container>
        <HeaderLayout />
        <ContentsLayout>
          <Outlet />
        </ContentsLayout>
      </Container>
    </>
  );
};

export default Template;
