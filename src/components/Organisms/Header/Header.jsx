import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';
import ContactList from '../../Molecules/ContactList/ContactList';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import TagList from '@components/Molecules/TagList/TagList';
import { styled } from 'styled-components';
import { useThemeAction } from 'src/store/ThemeStore';
import ColorGuide from '@components/Atoms/ColorGuide';

const HeaderBox = styled.header`
  height: 100%;
  border-right: 0.1rem solid #eee;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
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
const Header = ({ className }) => {
  const toggleTheme = useThemeAction();

  return (
    <>
      <HeaderBox className={`${className} borderColor`}>
        <div>
          <Logo />
          <h2>Hyunmin Yi</h2>
          <p>안녕하세요.이현민 입니다.</p>
          <article>
            <ContactList />
          </article>
          <Nav />
          <TagList />
        </div>
        <div>
          <DarkTheme onClick={toggleTheme} />
          <ColorGuide />
          <p style={{ opacity: 0.5, fontSize: '1.4rem' }}>
            © 2022. Hyunmin Yi. All rights reserved.
          </p>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
