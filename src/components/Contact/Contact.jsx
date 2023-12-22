import s from './Contact.module.css';

export const Contact = ({ id, name, phone, onDeleteContact }) => {
  return (
    <li>
      <p className={s.text}>
        {name}: {phone}
      </p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
