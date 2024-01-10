import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;
const Loading = () => {
  return (
    <Container>
      <h1>this is Loading</h1>
    </Container>
  );
};

export default Loading;
