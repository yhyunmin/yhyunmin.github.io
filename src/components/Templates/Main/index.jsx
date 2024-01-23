import React from 'react';
import Header from '../../Organisms/Header/Header';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.main`
  margin: 0 auto;
  padding: 40px 20px;
  padding-bottom: 140px;
  display: flex;
  justify-content: space-between;
  width: 144rem;
  height: 100vh;
`;
const HeaderLayout = styled(Header)`
  /* css */
  width: 32.9rem;
  display: flex;
  flex-direction: column;
`;
const ContentsLayout = styled.main`
  width: 92.4rem;
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
