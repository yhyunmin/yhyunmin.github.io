import React from 'react';
import ContactIcon from '../../Atoms/ContactIcon/ContactIcon';
import myContactList from 'src/Constants/Contacts';
import { styled } from 'styled-components';

const Container = styled.ul`
  display: flex;
  gap: 8px;
`;
const ContactsList = () => {
  const MyContact = myContactList.map(contact => (
    <ContactIcon
      key={contact.id}
      href={contact.href}
      icon={contact.icon}
      width={36}
    />
  ));
  return <Container>{MyContact}</Container>;
};

export default ContactsList;
