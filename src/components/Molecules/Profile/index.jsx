import React from 'react';
import { ReactComponent as GithubIcon } from '@img/mdi_github.svg';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import profileImg from '@img/profile.png';

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 700;
  }
  span {
    font-weight: 600;
  }
  a {
    display: flex;
    gap: 4px;
  }
`;
const Profile = () => {
  return (
    <>
      <Container>
        <img
          src={profileImg}
          alt='이현민 블로그'
          width={48}
          height={48}
          className='profileImg'
        />
        <NameBox>
          <p className='korfont'>이 현민</p>
          <Link target='_blank' to='https://github.com/yhyunmin'>
            <GithubIcon width={24} height={24} className='primary' />
            <span className='primary'>yhyunmin</span>
          </Link>
        </NameBox>
      </Container>
    </>
  );
};

export default Profile;
