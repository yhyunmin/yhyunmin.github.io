import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.nav`

`;

const Ul = styled.ul`
  @media (max-width: 500px) {
    display: flex;
    gap: 2rem;
  }
`;
const Li = styled.li`
  margin: 8px 0;
  font-weight: 600;

  & a:hover {
    /* text-decoration: underline; */
    border-bottom: 0.125rem solid #333;
  }
  //mobile 500px
`;
const Nav = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link to='/articles?page=1' className='navColor'>
            Articles
          </Link>
        </Li>
        {/* <Li>
          <Link to='/about' className='navColor'>
            About Me
          </Link>
        </Li> */}
      </Ul>
    </Container>
  );
};

export default Nav;
