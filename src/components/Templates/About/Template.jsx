import React from 'react';
import Header from './../../Organisms/Header/Header';
import { styled } from 'styled-components';

const Container = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 144rem;
  height: 100%;
  background-color: tan;
`;
const HeaderLayout = styled(Header)`
  /* css */
  width: 32.9rem;
  background-color: red;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ContentsLayout = styled.main`
  width: 92.4rem;
  background-color: blue;
`;

const Template = () => {
  return (
    <>
      <Container>
        <HeaderLayout />
        <ContentsLayout>
          <h2>Here is About page</h2>
        </ContentsLayout>
      </Container>
    </>
  );
};

export default Template;
