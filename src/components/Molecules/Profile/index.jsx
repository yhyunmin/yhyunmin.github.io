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
  }
  span {
    color: #a335f0;
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
        <img src={profileImg} alt='' width={48} />
        <NameBox>
          <p>이현민</p>
          <Link target='_blank'>
            <GithubIcon width={24} fill='#a335f0' />
            <span>yhyunmin</span>
          </Link>
        </NameBox>
      </Container>
    </>
  );
};

export default Profile;
