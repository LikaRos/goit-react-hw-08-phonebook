import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="backimage">
      <ContactForm />
      <ContactFilter />

      <ContactsList />
    </div>
  );
}
