import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Number is not valid')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
  id: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={clsx(css.form)}>
        <div className={clsx(css.fieldWrapper)}>
          <label className={clsx(css.formLabel)} htmlFor="userName">
            Name
          </label>
          <Field
            className={clsx(css.formInput)}
            type="text"
            name="name"
            id="userName"
          ></Field>
          <ErrorMessage
            className={clsx(css.formSpan)}
            name="name"
            component="span"
          />
        </div>
        <div className={clsx(css.fieldWrapper)}>
          <label className={clsx(css.formLabel)} htmlFor="userNumber">
            Number
          </label>
          <Field
            className={clsx(css.formInput)}
            type="text"
            name="number"
            id="userNumber"
          ></Field>
          <ErrorMessage
            className={clsx(css.formSpan)}
            name="number"
            component="span"
          />
        </div>
        <button className={clsx(css.formBtn)} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
