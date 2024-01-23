import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as EmailIcon } from '@img/mdi_mail.svg';
import { ReactComponent as GithubIcon } from '@img/mdi_github.svg';
import { ReactComponent as resumeIcon } from '@img/mdi_resume.svg';
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
const ContactIcon = ({ href, icon, alt, ...props }) => {
  const Icon2 =
    alt === 'Email' ? EmailIcon : alt === 'Github' ? GithubIcon : resumeIcon;
  return (
    <Icon>
      <Link to={href} target='_blank'>
        <Icon2 width={32} height={32} className='headingColor' />
      </Link>
    </Icon>
  );
};

export default ContactIcon;
