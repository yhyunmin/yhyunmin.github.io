import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.nav``;

const Ul = styled.ul``;
const Li = styled.li`
  margin: 8px 0;
  &:hover {
    text-decoration: underline;
  }
`;
const Nav = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link to='/'>Articles</Link>
        </Li>
        <Li>
          <Link to='/about'>About Me</Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Nav;
