import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';
import ContactList from '../../Molecules/ContactList/ContactList';

const Header = ({ className }) => {
  return (
    <>
      <header className={className}>
        <Logo />
        <h2>Hyunmin Yi</h2>
        <p>안녕하세요. 이현민 입니다. </p>
        <Nav />
        <article>
          <ContactList />
        </article>
      </header>
    </>
  );
};

export default Header;
