// import { Component } from 'react';
import { Contact } from 'components/Contact/Contact';
import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/operations';
import { selectContacts, selectFilter } from 'store/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <>
      <ul className={s.contactList}>
        {getFilteredContacts().map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            onDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};
