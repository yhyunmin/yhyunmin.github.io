import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';
import ContactList from '../../Molecules/ContactList/ContactList';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import TagList from '@components/Molecules/TagList/TagList';
import useThemeStore from 'src/store/ThemeStore';
import { styled } from 'styled-components';

const HeaderBox = styled.header`
  height: fit-content;
  border-right: 0.1rem solid #eee;
`;
const Header = ({ className }) => {
  const { toggleTheme } = useThemeStore();
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
