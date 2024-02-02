import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';
import ContactList from '../../Molecules/ContactList/ContactList';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import TagList from '@components/Molecules/TagList/TagList';
import { styled } from 'styled-components';
import { useThemeAction } from 'src/store/ThemeStore';
import ColorGuide from '@components/Atoms/ColorGuide';
import { Link } from 'react-router-dom';
import RecentPostList from '@components/Molecules/RecentPostList';
import { useLocalStorage } from 'src/store/LocalStorageStore';

const HeaderBox = styled.header`
  height: 100%;
  border-right: 0.1rem solid #eee;
  display: flex;
  justify-content: space-between;
  //mobile 500px
  @media (max-width: 500px) {
    border: none;
    border-bottom: 0.1rem solid #eee;
    padding-bottom: 2rem;
    gap: 1.2rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
    margin-right: 2rem;
    border-radius: 8px;
    padding: 1.2rem 0;
    font-weight: 600;
    div {
      width: 21rem;
      height: 4rem;
    }
    p {
      font-size: 1.4rem !important;
    }

    h1 {
      font-size: 2.6rem;
    }
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 500px) {
    gap: 0.4rem;
  }
`;
const StyledTagList = styled(TagList)``;
const StyledRecentPostList = styled(RecentPostList)`
  @media (max-width: 500px) {
    display: none;
  }
`;
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Header = ({ className }) => {
  const toggleTheme = useThemeAction();
  const localStorage = useLocalStorage();

  return (
    <>
      <HeaderBox className={`${className} borderColor`}>
        <HeaderContainer>
          <Logo />
          <div>
            <h2>Hyunmin Yi</h2>
            <p>안녕하세요.이현민 입니다.</p>
          </div>
          <article>
            <ContactList />
          </article>
          <Nav />
          <StyledTagList />
        </HeaderContainer>
        <div>
          <StyledRecentPostList localStorage={localStorage} />
        </div>

        <Copyright>
          <DarkTheme onClick={toggleTheme} />
          {/* <ColorGuide /> */}
          <p style={{ opacity: 0.5, fontSize: '1.4rem' }}>
            © 2022. Hyunmin Yi. All rights reserved.
          </p>
        </Copyright>
      </HeaderBox>
    </>
  );
};

export default Header;
