import clsx from 'clsx';
import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={clsx(css.contactWrapper)}>
      <div className={clsx(css.userInfo)}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        className={clsx(css.delBtn)}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
