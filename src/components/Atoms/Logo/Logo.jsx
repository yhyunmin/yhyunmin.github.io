import React from 'react';
import profileImg from '@img/profile.png';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  a {
    width: fit-content;
    text-indent: 0%;
  }
`;
const Logo = () => {
  return (
    <Container className='hidingTexts'>
      이현민 블로그
      <Link to='/'>
        <img src={profileImg} alt='이현민 블로그' width={64} />
      </Link>
    </Container>
  );
};

export default Logo;
