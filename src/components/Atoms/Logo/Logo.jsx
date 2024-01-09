import React from 'react';
import profileImg from '@img/profile.png';
import { styled } from 'styled-components';

const Logo = () => {
  return (
    <h1 className='hidingTexts'>
      이현민
      <img src={profileImg} alt='이현민 블로그 로고' width={75} />
      {/* <Link to='/'> */}
      {/* </Link> */}
    </h1>
  );
};

export default Logo;
