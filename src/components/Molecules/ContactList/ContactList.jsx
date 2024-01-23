import React from 'react';
import ContactIcon from '../../Atoms/ContactIcon/ContactIcon';
import myContactList from 'src/Constants/Contacts';
import { styled } from 'styled-components';

const Container = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: flex-start;
`;
const ContactsList = () => {
  const MyContact = myContactList.map(contact => (
    <ContactIcon
      key={contact.id}
      alt={contact.title}
      href={contact.href}
      icon={contact.icon}
      width={24}
    />
  ));
  return <Container>{MyContact}</Container>;
};

export default ContactsList;
