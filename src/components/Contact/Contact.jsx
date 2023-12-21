import s from './Contact.module.css';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
