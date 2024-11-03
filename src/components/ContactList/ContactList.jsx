import clsx from 'clsx';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectLoading, selectError } from '../../redux/contactsSelectors.js';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <p>Loading... Please wait</p>}
      {error && <p>{error}</p>}
      <ul className={clsx(css.list)}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
