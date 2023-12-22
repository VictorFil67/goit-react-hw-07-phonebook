import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction, setFilterAction } from '../store/contactsSlice';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'store/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'store/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  const filterText = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem('ContactsData'));
  //   if (contacts?.length) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('ContactsData', JSON.stringify(contacts));
  // }, [contacts]);

  const createContact = contact => {
    // const newContact = {
    //   ...contact,
    //   id: nanoid(),
    // };
    const isName = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (!isName) {
      dispatch(createContactAction(contact));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  const handleDeleteContact = contactId => {
    // setContacts(prev => prev.filter(contact => contact.id !== contactId));
    dispatch(deleteContact(contactId));
  };

  const handleSetFilter = e => {
    // setFilter(e.target.value);

    dispatch(setFilterAction(e.target.value));
  };

  const getFilteredContacts = () => {
    // console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        marginLeft: '100px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <h2>Contacts</h2>
      <SearchFilter onChangeSearch={handleSetFilter} filter={filterText} />
      <Contacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
