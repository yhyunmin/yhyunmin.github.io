import React from 'react';
import { ReactComponent as GithubIcon } from '@img/mdi_github.svg';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import profileImg from '@img/profile.png';

const Container = styled.div`
  display: flex;
  gap: 12px;
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: white;
    font-weight: 700;
  }
  span {
    color: #5022c2;
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
        <img src={profileImg} alt='이현민 블로그' width={48} />
        <NameBox>
          <p className='korfont'>이 현민</p>
          <Link target='_blank'>
            <GithubIcon width={24} fill='#5022c2' />
            <span>yhyunmin</span>
          </Link>
        </NameBox>
      </Container>
    </>
  );
};

export default Profile;
