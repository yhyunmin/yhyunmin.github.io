import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Icon = styled.li`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    background-color: #0001;
  }
`;
const ContactIcon = ({ href, icon, ...props }) => {
  return (
    <Icon>
      <Link to={href} target='_blank'>
        <img src={icon} alt='' {...props} />
      </Link>
    </Icon>
  );
};

export default ContactIcon;
