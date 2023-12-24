import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <ContactForm />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <h2>Contacts</h2>
      <SearchFilter />
      <Contacts />
    </div>
  );
};
