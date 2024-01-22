import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';
import ContactList from '../../Molecules/ContactList/ContactList';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import TagList from '@components/Molecules/TagList/TagList';
import { styled } from 'styled-components';
import { useThemeAction } from 'src/store/ThemeStore';

const HeaderBox = styled.header`
  height: fit-content;
  border-right: 0.1rem solid #eee;
  p {
    opacity: 0.7;
  }
`;
const Header = ({ className }) => {
  const toggleTheme = useThemeAction();

  return (
    <>
      <HeaderBox className={className}>
        <Logo />
        <h2>Hyunmin Yi</h2>
        <p>안녕하세요.이현민 입니다.</p>
        <article>
          <ContactList />
        </article>
        <Nav />
        <DarkTheme onClick={toggleTheme} />
        <TagList />
      </HeaderBox>
    </>
  );
};

export default Header;
