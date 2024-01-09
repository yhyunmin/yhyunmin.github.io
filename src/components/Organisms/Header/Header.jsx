import React from 'react';
import Logo from '@components/Atoms/Logo/Logo';
import Nav from './../../Molecules/Nav/Nav';

const Header = ({ className }) => {
  return (
    <>
      <header className={className}>
        <Logo />
        <h2>Hyunmin Yi</h2>
        <p>안녕하세요. 이현민 입니다. </p>
        <Nav />
        <article>
          <ul>
            <li>github link</li>
            <li>resume</li>
            <li>email</li>
          </ul>
        </article>
      </header>
    </>
  );
};

export default Header;
