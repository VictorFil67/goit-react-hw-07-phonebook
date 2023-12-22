// import { Component } from 'react';
import { Contact } from 'components/Contact/Contact';
import s from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            // name={name}
            // number={number}

            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};
