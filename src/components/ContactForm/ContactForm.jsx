import { useState } from 'react';
import s from './ContactForm.module.css';

import React from 'react';
// rfc - create func
export const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if ([target.name][0] === 'name') {
      setName(target.value);
    }
    if ([target.name][0] === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          value={name}
          required
        />
        <label className={s.label} htmlFor="tel">
          Number
        </label>
        <input
          className={s.input}
          onChange={handleChange}
          id="tel"
          type="tel"
          name="number"
          value={number}
          required
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
