import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Icon = styled.li`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
const ContactIcon = ({ href, icon, ...props }) => {
  return (
    <Icon>
      <Link to={href} target='_blank'>
        <img src={icon} {...props} />
      </Link>
    </Icon>
  );
};

export default ContactIcon;
